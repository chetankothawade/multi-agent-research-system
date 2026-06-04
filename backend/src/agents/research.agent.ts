import { Agent } from "@mastra/core/agent";
import { env } from "../config/env";

export const researchAgent = new Agent({
  id: "research-agent",
  name: "Research Agent",
  model: env.RESEARCH_MODEL,
  instructions:
    "Search the web with Tavily, Serper, and HTTP fetch tools. Gather sources, extract content, and rank source quality. Return sources and extractedContent."
});
