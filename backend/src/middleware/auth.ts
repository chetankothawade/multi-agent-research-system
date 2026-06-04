import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env";
import { AppError } from "../utils/app-error";
import type { AuthUser } from "../types/api";

export function requireAuth(req: Request, _res: Response, next: NextFunction) {
  const header = req.header("authorization");
  const token = header?.startsWith("Bearer ") ? header.slice(7) : undefined;

  if (!token) {
    return next(new AppError(401, "Authentication required"));
  }

  try {
    req.user = jwt.verify(token, env.JWT_SECRET) as AuthUser;
    return next();
  } catch {
    return next(new AppError(401, "Invalid or expired token"));
  }
}
