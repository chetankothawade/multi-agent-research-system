import { Router } from "express";
import { ObservabilityController } from "../controllers/observability.controller";
import { requireAuth } from "../middleware/auth";
import { asyncHandler } from "../utils/async-handler";

const controller = new ObservabilityController();
export const observabilityRoutes = Router();

observabilityRoutes.get("/session/:id", requireAuth, asyncHandler(controller.getSession));
observabilityRoutes.get("/agent/:id", requireAuth, asyncHandler(controller.getAgent));
