import type { Request, Response } from "express";
import { prisma } from "../prisma/client";
import { AppError } from "../utils/app-error";

export class ReportController {
  getById = async (req: Request, res: Response) => {
    if (!req.user) {
      throw new AppError(401, "Authentication required");
    }

    const report = await prisma.report.findFirst({
      where: {
        id: String(req.params.id),
        session: { userId: req.user.id }
      },
      include: { session: true }
    });

    if (!report) {
      throw new AppError(404, "Report not found");
    }

    return res.json(report);
  };
}
