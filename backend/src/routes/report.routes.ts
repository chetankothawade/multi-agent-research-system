import { Router } from "express";
import { ReportController } from "../controllers/report.controller";
import { requireAuth } from "../middleware/auth";
import { asyncHandler } from "../utils/async-handler";

const controller = new ReportController();
export const reportRoutes = Router();

reportRoutes.get("/:id", requireAuth, asyncHandler(controller.getById));
