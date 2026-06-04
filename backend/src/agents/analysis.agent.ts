import { Agent } from "@mastra/core/agent";
import { env } from "../config/env";

export const analysisAgent = new Agent({
  id: "analysis-agent",
  name: "Analysis Agent",
  model: env.ANALYSIS_MODEL,
  instructions:
    "Deduplicate findings, resolve contradictions, extract key insights, and return findings, risks, opportunities, and trends."
});
