import { prisma } from "../prisma/client";
import type { AgentStreamEvent } from "../types/socket";

export class ObservabilityService {
  getSession(sessionId: string, userId: string) {
    return prisma.researchSession.findFirst({
      where: { id: sessionId, userId },
      include: {
        agents: {
          orderBy: { createdAt: "asc" },
          include: { steps: { orderBy: { stepNumber: "asc" } } }
        },
        report: true
      }
    });
  }

  getAgent(agentId: string, userId: string) {
    return prisma.agent.findFirst({
      where: { id: agentId, session: { userId } },
      include: { steps: { orderBy: { stepNumber: "asc" } } }
    });
  }

  toSocketEvent(event: Omit<AgentStreamEvent, "timestamp">): AgentStreamEvent {
    return { ...event, timestamp: new Date().toISOString() };
  }
}
