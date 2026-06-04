import { Agent } from "@mastra/core/agent";
import { env } from "../config/env";

export const orchestratorAgent = new Agent({
  id: "orchestrator-agent",
  name: "Orchestrator Agent",
  model: env.ORCHESTRATOR_MODEL,
  instructions:
    "Receive a research topic, break it into subtopics, create a concise research plan, delegate work, track progress, aggregate results, and keep total execution under 50 steps."
});
