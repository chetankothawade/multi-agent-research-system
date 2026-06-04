import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  DATABASE_URL: z.string().min(1),
  DATABASE_HOST: z.string().default("localhost"),
  DATABASE_PORT: z.coerce.number().int().positive().default(3306),
  DATABASE_USER: z.string().default("root"),
  DATABASE_PASSWORD: z.string().default(""),
  DATABASE_NAME: z.string().default("multi_agent_research"),
  JWT_SECRET: z.string().min(24),
  JWT_EXPIRES_IN: z.string().default("1d"),
  PORT: z.coerce.number().int().positive().default(4000),
  FRONTEND_ORIGIN: z.string().url().default("http://localhost:5173"),
  DEEPINFRA_BASE_URL: z.string().url().default("https://api.deepinfra.com/v1/openai"),
  DEEPINFRA_API_KEY: z.string().optional(),
  DEFAULT_MODEL: z.string().default("deepseek-ai/DeepSeek-V3.2"),
  RESEARCH_MODEL: z.string().default("deepseek-ai/DeepSeek-V3.2"),
  ORCHESTRATOR_MODEL: z.string().default("qwen3.6"),
  ANALYSIS_MODEL: z.string().default("glm-5.1"),
  WRITING_MODEL: z.string().default("qwen3-coder"),
  TAVILY_API_KEY: z.string().optional(),
  SERPER_API_KEY: z.string().optional()
});

export const env = envSchema.parse(process.env);
