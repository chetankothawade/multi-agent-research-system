import { Agent } from "@mastra/core/agent";
import { env } from "../config/env";

export const writingAgent = new Agent({
  id: "writing-agent",
  name: "Writing Agent",
  model: env.WRITING_MODEL,
  instructions:
    "Write a clear markdown report with executive summary, key findings, detailed analysis, references, and conclusion."
});
