import type { Request, Response } from "express";
import { ObservabilityService } from "../observability/observability.service";
import { AppError } from "../utils/app-error";

export class ObservabilityController {
  constructor(private readonly observability = new ObservabilityService()) {}

  getSession = async (req: Request, res: Response) => {
    if (!req.user) {
      throw new AppError(401, "Authentication required");
    }

    const session = await this.observability.getSession(String(req.params.id), req.user.id);
    if (!session) {
      throw new AppError(404, "Session not found");
    }

    return res.json(session);
  };

  getAgent = async (req: Request, res: Response) => {
    if (!req.user) {
      throw new AppError(401, "Authentication required");
    }

    const agent = await this.observability.getAgent(String(req.params.id), req.user.id);
    if (!agent) {
      throw new AppError(404, "Agent not found");
    }

    return res.json(agent);
  };
}
