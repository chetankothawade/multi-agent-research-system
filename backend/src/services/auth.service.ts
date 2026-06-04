import bcrypt from "bcryptjs";
import { z } from "zod";
import { UserRepository } from "../repositories/user.repository";
import { AppError } from "../utils/app-error";
import { TokenService } from "./token.service";

export const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8)
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1)
});

export class AuthService {
  constructor(
    private readonly users = new UserRepository(),
    private readonly tokens = new TokenService()
  ) {}

  async register(input: z.infer<typeof registerSchema>) {
    const data = registerSchema.parse(input);
    const existing = await this.users.findByEmail(data.email);
    if (existing) {
      throw new AppError(409, "Email is already registered");
    }

    const passwordHash = await bcrypt.hash(data.password, 12);
    const user = await this.users.create({ name: data.name, email: data.email, passwordHash });
    const authUser = { id: user.id, name: user.name, email: user.email };
    return { user: authUser, accessToken: this.tokens.sign(authUser) };
  }

  async login(input: z.infer<typeof loginSchema>) {
    const data = loginSchema.parse(input);
    const user = await this.users.findByEmail(data.email);
    if (!user) {
      throw new AppError(401, "Invalid email or password");
    }

    const valid = await bcrypt.compare(data.password, user.passwordHash);
    if (!valid) {
      throw new AppError(401, "Invalid email or password");
    }

    const authUser = { id: user.id, name: user.name, email: user.email };
    return { user: authUser, accessToken: this.tokens.sign(authUser) };
  }
}
