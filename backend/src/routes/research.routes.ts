import { Router } from "express";
import { ResearchController } from "../controllers/research.controller";
import { requireAuth } from "../middleware/auth";
import { asyncHandler } from "../utils/async-handler";

const controller = new ResearchController();
export const researchRoutes = Router();

researchRoutes.post("/start", requireAuth, asyncHandler(controller.start));
researchRoutes.get("/", requireAuth, asyncHandler(controller.list));
researchRoutes.get("/:id", requireAuth, asyncHandler(controller.getById));
