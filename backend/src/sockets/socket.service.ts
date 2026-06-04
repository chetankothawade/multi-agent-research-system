import type { Server } from "socket.io";
import { socketEvents, type AgentStreamEvent } from "../types/socket";

let io: Server | undefined;

export function registerSocketServer(server: Server) {
  io = server;

  io.on("connection", (socket) => {
    socket.on(socketEvents.joinSession, (sessionId: string) => {
      socket.join(sessionId);
    });

    socket.on(socketEvents.leaveSession, (sessionId: string) => {
      socket.leave(sessionId);
    });
  });
}

export function emitAgentEvent(event: AgentStreamEvent) {
  io?.to(event.sessionId).emit(socketEvents.agentEvent, event);
}
