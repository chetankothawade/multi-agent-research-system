import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { asyncHandler } from "../utils/async-handler";

const controller = new AuthController();
export const authRoutes = Router();

authRoutes.post("/register", asyncHandler(controller.register));
authRoutes.post("/login", asyncHandler(controller.login));
