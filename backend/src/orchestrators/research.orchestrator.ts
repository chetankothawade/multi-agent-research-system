import { env } from "../config/env";
import { emitAgentEvent } from "../sockets/socket.service";
import { ObservabilityService } from "../observability/observability.service";
import { PricingService } from "../services/pricing.service";
import { prisma } from "../prisma/client";
import type { AnalysisAgentOutput, ReportOutput, ResearchAgentOutput } from "../types/api";

type AgentName = "Orchestrator Agent" | "Research Agent" | "Analysis Agent" | "Writing Agent";

export class ResearchOrchestrator {
  constructor(
    private readonly observability = new ObservabilityService(),
    private readonly pricing = new PricingService()
  ) {}

  async start(userId: string, topic: string) {
    const session = await prisma.researchSession.create({
      data: { userId, topic, status: "running" }
    });

    this.emit({
      type: "session.started",
      sessionId: session.id,
      message: "Research session started",
      payload: { topic }
    });

    void this.run(session.id, topic).catch(async (error: unknown) => {
      await prisma.researchSession.update({
        where: { id: session.id },
        data: { status: "failed", completedAt: new Date() }
      });
      this.emit({
        type: "session.failed",
        sessionId: session.id,
        message: "Research session failed",
        payload: { error: error instanceof Error ? error.message : String(error) }
      });
    });

    return { sessionId: session.id, status: session.status };
  }

  async getSession(sessionId: string, userId: string) {
    return prisma.researchSession.findFirst({
      where: { id: sessionId, userId },
      include: { agents: { include: { steps: true } }, report: true }
    });
  }

  async listSessions(userId: string) {
    return prisma.researchSession.findMany({
      where: { userId },
      orderBy: { startedAt: "desc" },
      take: 20,
      include: {
        report: { select: { id: true } },
        _count: { select: { agents: true } }
      }
    });
  }

  private async run(sessionId: string, topic: string) {
    const plan = await this.recordAgent(sessionId, "Orchestrator Agent", { topic }, async (agentId) => {
      const subtopics = [`Current state of ${topic}`, `Risks and contradictions for ${topic}`, `Future outlook for ${topic}`];
      await this.recordStep(agentId, 1, "create_research_plan", { topic }, { subtopics }, 420, 180);
      return { subtopics, maxSteps: 50 };
    });

    const research = await this.recordAgent<ResearchAgentOutput>(sessionId, "Research Agent", plan, async (agentId) => {
      const output: ResearchAgentOutput = {
        sources: [
          {
            title: `Primary source placeholder for ${topic}`,
            url: "https://example.com/source",
            snippet: "External search tools are wired in a later increment when API keys are configured.",
            qualityScore: 0.75
          }
        ],
        extractedContent: [
          {
            sourceUrl: "https://example.com/source",
            content: `Initial extracted content placeholder for ${topic}.`
          }
        ]
      };
      await this.recordStep(agentId, 1, "source_collection", { topic }, output, 650, 240);
      return output;
    });

    const analysis = await this.recordAgent<AnalysisAgentOutput>(sessionId, "Analysis Agent", research, async (agentId) => {
      const output: AnalysisAgentOutput = {
        findings: [`${topic} requires structured source verification before final claims are trusted.`],
        risks: ["Search API keys are not configured yet."],
        opportunities: ["The observability model is ready to track each real tool call."],
        trends: ["Agentic research workflows benefit from persistent step-level traces."]
      };
      await this.recordStep(agentId, 1, "synthesize_findings", { sourceCount: research.sources.length }, output, 700, 320);
      return output;
    });

    const report = await this.recordAgent<ReportOutput>(sessionId, "Writing Agent", analysis, async (agentId) => {
      const output = this.buildReport(topic, research, analysis);
      await this.recordStep(agentId, 1, "write_report", { topic }, output, 800, 520);
      return output;
    });

    await prisma.report.create({
      data: {
        sessionId,
        executiveSummary: report.executiveSummary,
        keyFindings: report.keyFindings,
        detailedAnalysis: report.detailedAnalysis,
        references: report.references as unknown as object,
        conclusion: report.conclusion
      }
    });

    const totals = await prisma.agent.aggregate({
      where: { sessionId },
      _sum: { tokenUsage: true, cost: true }
    });
    const totalSteps = await prisma.agentStep.count({ where: { agent: { sessionId } } });

    await prisma.researchSession.update({
      where: { id: sessionId },
      data: {
        status: "completed",
        totalTokens: totals._sum.tokenUsage ?? 0,
        totalCost: totals._sum.cost ?? 0,
        totalSteps,
        completedAt: new Date()
      }
    });

    this.emit({
      type: "session.completed",
      sessionId,
      message: "Research session completed",
      payload: { report }
    });
  }

  private async recordAgent<T>(
    sessionId: string,
    agentName: AgentName,
    inputData: unknown,
    work: (agentId: string) => Promise<T>
  ): Promise<T> {
    const startedAt = Date.now();
    const agent = await prisma.agent.create({
      data: { sessionId, agentName, status: "running", inputData: inputData as object }
    });

    this.emit({ type: "agent.started", sessionId, agentName, message: `${agentName} started` });

    try {
      const output = await work(agent.id);
      const steps = await prisma.agentStep.aggregate({
        where: { agentId: agent.id },
        _sum: { promptTokens: true, completionTokens: true, cost: true }
      });
      const tokenUsage = (steps._sum.promptTokens ?? 0) + (steps._sum.completionTokens ?? 0);

      await prisma.agent.update({
        where: { id: agent.id },
        data: {
          status: "completed",
          outputData: output as object,
          tokenUsage,
          cost: steps._sum.cost ?? 0,
          executionTimeMs: Date.now() - startedAt
        }
      });

      this.emit({ type: "agent.completed", sessionId, agentName, message: `${agentName} completed`, payload: output });
      return output;
    } catch (error) {
      await prisma.agent.update({
        where: { id: agent.id },
        data: {
          status: "failed",
          error: error instanceof Error ? error.message : String(error),
          executionTimeMs: Date.now() - startedAt
        }
      });
      this.emit({ type: "agent.failed", sessionId, agentName, message: `${agentName} failed` });
      throw error;
    }
  }

  private async recordStep(
    agentId: string,
    stepNumber: number,
    toolName: string,
    args: unknown,
    response: unknown,
    promptTokens: number,
    completionTokens: number
  ) {
    const agent = await prisma.agent.findUniqueOrThrow({ where: { id: agentId } });
    const cost = await this.pricing.calculate(env.DEFAULT_MODEL, promptTokens, completionTokens);
    const step = await prisma.agentStep.create({
      data: {
        agentId,
        stepNumber,
        toolName,
        arguments: args as object,
        response: response as object,
        promptTokens,
        completionTokens,
        cost
      }
    });

    this.emit({
      type: "agent.step",
      sessionId: agent.sessionId,
      agentName: agent.agentName,
      message: `${agent.agentName} ${toolName}`,
      payload: step
    });
  }

  private buildReport(topic: string, research: ResearchAgentOutput, analysis: AnalysisAgentOutput): ReportOutput {
    const executiveSummary = `Initial research report for ${topic}.`;
    const keyFindings = analysis.findings;
    const detailedAnalysis = [...analysis.findings, ...analysis.risks, ...analysis.opportunities, ...analysis.trends].join("\n\n");
    const conclusion = `The platform foundation is ready to replace placeholders with live Mastra tool execution.`;
    const markdown = `# ${topic}\n\n## Executive Summary\n${executiveSummary}\n\n## Key Findings\n${keyFindings.map((item) => `- ${item}`).join("\n")}\n\n## Detailed Analysis\n${detailedAnalysis}\n\n## References\n${research.sources.map((source) => `- [${source.title}](${source.url})`).join("\n")}\n\n## Conclusion\n${conclusion}`;

    return {
      executiveSummary,
      keyFindings,
      detailedAnalysis,
      references: research.sources,
      conclusion,
      markdown
    };
  }

  private emit(event: Parameters<ObservabilityService["toSocketEvent"]>[0]) {
    emitAgentEvent(this.observability.toSocketEvent(event));
  }
}
