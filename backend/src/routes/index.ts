import { Router } from "express";
import { authRoutes } from "./auth.routes";
import { observabilityRoutes } from "./observability.routes";
import { reportRoutes } from "./report.routes";
import { researchRoutes } from "./research.routes";

export const apiRoutes = Router();

apiRoutes.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

apiRoutes.use("/auth", authRoutes);
apiRoutes.use("/research", researchRoutes);
apiRoutes.use("/report", reportRoutes);
apiRoutes.use("/observability", observabilityRoutes);
