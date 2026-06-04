export type AgentEventType =
  | "session.started"
  | "agent.started"
  | "agent.step"
  | "agent.completed"
  | "agent.failed"
  | "session.completed"
  | "session.failed";

export interface AgentStreamEvent {
  type: AgentEventType;
  sessionId: string;
  agentName?: string;
  message: string;
  payload?: unknown;
  timestamp: string;
}

export const socketEvents = {
  joinSession: "session:join",
  leaveSession: "session:leave",
  agentEvent: "agent:event"
} as const;
