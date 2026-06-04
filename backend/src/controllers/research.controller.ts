import type { Request, Response } from "express";
import { z } from "zod";
import { ResearchOrchestrator } from "../orchestrators/research.orchestrator";
import { AppError } from "../utils/app-error";

const startResearchSchema = z.object({
  topic: z.string().min(3).max(500)
});

export class ResearchController {
  constructor(private readonly orchestrator = new ResearchOrchestrator()) {}

  start = async (req: Request, res: Response) => {
    if (!req.user) {
      throw new AppError(401, "Authentication required");
    }

    const { topic } = startResearchSchema.parse(req.body);
    const result = await this.orchestrator.start(req.user.id, topic);
    return res.status(202).json(result);
  };

  list = async (req: Request, res: Response) => {
    if (!req.user) {
      throw new AppError(401, "Authentication required");
    }

    const sessions = await this.orchestrator.listSessions(req.user.id);
    return res.json(sessions);
  };

  getById = async (req: Request, res: Response) => {
    if (!req.user) {
      throw new AppError(401, "Authentication required");
    }

    const session = await this.orchestrator.getSession(String(req.params.id), req.user.id);
    if (!session) {
      throw new AppError(404, "Research session not found");
    }

    return res.json(session);
  };
}
