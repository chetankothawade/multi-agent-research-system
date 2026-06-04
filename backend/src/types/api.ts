export interface AuthUser {
  id: string;
  name: string;
  email: string;
}

export interface AuthResponse {
  user: AuthUser;
  accessToken: string;
}

export interface ResearchStartRequest {
  topic: string;
}

export interface ResearchStartResponse {
  sessionId: string;
  status: "pending" | "running";
}

export interface ResearchSource {
  title: string;
  url: string;
  snippet?: string;
  qualityScore: number;
}

export interface ResearchAgentOutput {
  sources: ResearchSource[];
  extractedContent: Array<{
    sourceUrl: string;
    content: string;
  }>;
}

export interface AnalysisAgentOutput {
  findings: string[];
  risks: string[];
  opportunities: string[];
  trends: string[];
}

export interface ReportOutput {
  executiveSummary: string;
  keyFindings: string[];
  detailedAnalysis: string;
  references: ResearchSource[];
  conclusion: string;
  markdown: string;
}
