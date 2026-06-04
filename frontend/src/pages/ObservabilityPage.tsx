import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { api } from '../services/api'

interface AgentStep {
  id: string
  stepNumber: number
  toolName: string
  arguments: unknown
  response: unknown
  promptTokens: number
  completionTokens: number
  cost: string | number
  createdAt: string
}

interface AgentTrace {
  id: string
  agentName: string
  status: string
  inputData: unknown
  outputData: unknown
  tokenUsage: number
  cost: string | number
  executionTimeMs: number
  retries: number
  error?: string | null
  createdAt: string
  steps: AgentStep[]
}

interface ObservabilitySession {
  id: string
  topic: string
  status: string
  totalTokens: number
  totalCost: string | number
  totalSteps: number
  startedAt: string
  completedAt?: string | null
  agents: AgentTrace[]
  report?: {
    id: string
  } | null
}

function formatCurrency(value: string | number) {
  return `$${Number(value || 0).toFixed(6)}`
}

function formatDuration(startedAt: string, completedAt?: string | null) {
  const end = completedAt ? new Date(completedAt).getTime() : Date.now()
  const start = new Date(startedAt).getTime()
  const seconds = Math.max(0, Math.round((end - start) / 1000))
  return `${seconds}s`
}

function JsonBlock({ value }: { value: unknown }) {
  return <pre className="json-block mb-0">{JSON.stringify(value ?? {}, null, 2)}</pre>
}

export function ObservabilityPage() {
  const { sessionId } = useParams()
  const [session, setSession] = useState<ObservabilitySession | null>(null)
  const [selectedStep, setSelectedStep] = useState<AgentStep | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!sessionId) return

    setLoading(true)
    api
      .get<ObservabilitySession>(`/observability/session/${sessionId}`)
      .then(({ data }) => {
        setSession(data)
        setSelectedStep(data.agents.flatMap((agent) => agent.steps)[0] ?? null)
        setError('')
      })
      .catch(() => setError('Unable to load observability data.'))
      .finally(() => setLoading(false))
  }, [sessionId])

  const totals = useMemo(() => {
    if (!session) return { duration: '0s', cost: '$0.000000', tokens: 0, steps: 0 }
    return {
      duration: formatDuration(session.startedAt, session.completedAt),
      cost: formatCurrency(session.totalCost),
      tokens: session.totalTokens,
      steps: session.totalSteps,
    }
  }, [session])

  if (loading) {
    return <div className="alert alert-info">Loading observability data...</div>
  }

  if (error || !session) {
    return <div className="alert alert-danger">{error || 'Session not found.'}</div>
  }

  return (
    <div>
      <div className="d-flex flex-wrap justify-content-between align-items-start gap-3 mb-4">
        <div>
          <h1 className="h3 mb-1">Observability</h1>
          <div className="text-secondary">{session.topic}</div>
        </div>
        {session.report && (
          <Link className="btn btn-outline-primary btn-sm" to={`/report/${session.report.id}`}>
            View Report
          </Link>
        )}
      </div>

      <div className="row g-3 mb-4">
        <SummaryCard label="Status" value={session.status} />
        <SummaryCard label="Duration" value={totals.duration} />
        <SummaryCard label="Tokens" value={String(totals.tokens)} />
        <SummaryCard label="Cost" value={totals.cost} />
        <SummaryCard label="Steps" value={String(totals.steps)} />
      </div>

      <div className="row g-4">
        <div className="col-lg-7">
          <h2 className="h5 mb-3">Agent Timeline</h2>
          <div className="vstack gap-3">
            {session.agents.map((agent) => (
              <div className="card" key={agent.id}>
                <div className="card-body">
                  <div className="d-flex flex-wrap justify-content-between gap-2 mb-2">
                    <div>
                      <h3 className="h6 mb-1">{agent.agentName}</h3>
                      <span className={`badge ${agent.status === 'completed' ? 'text-bg-success' : 'text-bg-secondary'}`}>
                        {agent.status}
                      </span>
                    </div>
                    <div className="text-end small text-secondary">
                      <div>{agent.executionTimeMs} ms</div>
                      <div>{formatCurrency(agent.cost)}</div>
                    </div>
                  </div>

                  <div className="table-responsive">
                    <table className="table table-sm align-middle mb-0">
                      <thead>
                        <tr>
                          <th>Step</th>
                          <th>Tool</th>
                          <th>Tokens</th>
                          <th>Cost</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {agent.steps.map((step) => (
                          <tr key={step.id}>
                            <td>{step.stepNumber}</td>
                            <td>{step.toolName}</td>
                            <td>{step.promptTokens + step.completionTokens}</td>
                            <td>{formatCurrency(step.cost)}</td>
                            <td className="text-end">
                              <button className="btn btn-outline-secondary btn-sm" onClick={() => setSelectedStep(step)}>
                                Inspect
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-5">
          <h2 className="h5 mb-3">Step Inspector</h2>
          <div className="card sticky-lg-top step-inspector">
            <div className="card-body">
              {selectedStep ? (
                <>
                  <div className="d-flex justify-content-between gap-2 mb-3">
                    <div>
                      <div className="fw-semibold">{selectedStep.toolName}</div>
                      <div className="small text-secondary">Step {selectedStep.stepNumber}</div>
                    </div>
                    <div className="small text-secondary">{formatCurrency(selectedStep.cost)}</div>
                  </div>
                  <h3 className="h6">Arguments</h3>
                  <JsonBlock value={selectedStep.arguments} />
                  <h3 className="h6 mt-3">Response</h3>
                  <JsonBlock value={selectedStep.response} />
                </>
              ) : (
                <p className="text-secondary mb-0">No step selected.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SummaryCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="col-sm-6 col-lg">
      <div className="card h-100">
        <div className="card-body">
          <div className="text-secondary small">{label}</div>
          <div className="fs-5 fw-semibold text-capitalize">{value}</div>
        </div>
      </div>
    </div>
  )
}
