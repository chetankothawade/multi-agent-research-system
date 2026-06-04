import http from "http";
import { Server } from "socket.io";
import { createApp } from "./app";
import { env } from "./config/env";
import { logger } from "./config/logger";
import { prisma } from "./prisma/client";
import { registerSocketServer } from "./sockets/socket.service";

const app = createApp();
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: env.FRONTEND_ORIGIN,
    credentials: true
  }
});

registerSocketServer(io);

httpServer.listen(env.PORT, () => {
  logger.info(`Backend listening on port ${env.PORT}`);
});

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

async function shutdown() {
  logger.info("Shutting down backend");
  await prisma.$disconnect();
  httpServer.close(() => process.exit(0));
}
