import jwt, { type SignOptions } from "jsonwebtoken";
import { env } from "../config/env";
import type { AuthUser } from "../types/api";

export class TokenService {
  sign(user: AuthUser): string {
    const options: SignOptions = { expiresIn: env.JWT_EXPIRES_IN as SignOptions["expiresIn"] };
    return jwt.sign(user, env.JWT_SECRET, options);
  }
}
