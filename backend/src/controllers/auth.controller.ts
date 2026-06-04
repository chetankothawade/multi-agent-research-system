import type { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

export class AuthController {
  constructor(private readonly auth = new AuthService()) {}

  register = async (req: Request, res: Response) => {
    const result = await this.auth.register(req.body);
    return res.status(201).json(result);
  };

  login = async (req: Request, res: Response) => {
    const result = await this.auth.login(req.body);
    return res.json(result);
  };
}
