import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../services/api'

interface ResearchSession {
  id: string
  topic: string
  status: string
  totalTokens: number
  totalCost: string | number
  totalSteps: number
  startedAt: string
  completedAt?: string | null
  report?: {
    id: string
  } | null
  _count?: {
    agents: number
  }
}

function formatCurrency(value: string | number) {
  return `$${Number(value || 0).toFixed(6)}`
}

export function DashboardPage() {
  const [sessions, setSessions] = useState<ResearchSession[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    api
      .get<ResearchSession[]>('/research')
      .then(({ data }) => {
        setSessions(data)
        setError('')
      })
      .catch(() => setError('Unable to load research sessions.'))
      .finally(() => setLoading(false))
  }, [])

  const totals = useMemo(
    () => ({
      sessions: sessions.length,
      agents: sessions.reduce((sum, session) => sum + (session._count?.agents ?? 0), 0),
      steps: sessions.reduce((sum, session) => sum + session.totalSteps, 0),
      cost: sessions.reduce((sum, session) => sum + Number(session.totalCost || 0), 0),
    }),
    [sessions],
  )

  return (
    <div>
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div>
          <h1 className="h3 mb-1">Dashboard</h1>
          <p className="text-secondary mb-0">Start a research run and inspect reports and observability traces.</p>
        </div>
        <Link className="btn btn-primary" to="/research">
          New Research
        </Link>
      </div>

      <div className="row g-3 mb-4">
        <SummaryCard label="Sessions" value={String(totals.sessions)} />
        <SummaryCard label="Agents" value={String(totals.agents)} />
        <SummaryCard label="Steps" value={String(totals.steps)} />
        <SummaryCard label="Cost" value={formatCurrency(totals.cost)} />
      </div>

      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="h5 mb-0">Recent Sessions</h2>
            <span className="text-secondary small">Report and observability links appear here</span>
          </div>

          {loading && <div className="alert alert-info mb-0">Loading sessions...</div>}
          {error && <div className="alert alert-danger mb-0">{error}</div>}

          {!loading && !error && sessions.length === 0 && (
            <div className="text-secondary">No research sessions yet. Start a new research run to create links.</div>
          )}

          {!loading && !error && sessions.length > 0 && (
            <div className="table-responsive">
              <table className="table align-middle mb-0">
                <thead>
                  <tr>
                    <th>Topic</th>
                    <th>Status</th>
                    <th>Tokens</th>
                    <th>Cost</th>
                    <th>Started</th>
                    <th className="text-end">Links</th>
                  </tr>
                </thead>
                <tbody>
                  {sessions.map((session) => (
                    <tr key={session.id}>
                      <td>
                        <div className="fw-semibold">{session.topic}</div>
                        <div className="small text-secondary text-break">{session.id}</div>
                      </td>
                      <td>
                        <span className={`badge ${session.status === 'completed' ? 'text-bg-success' : 'text-bg-secondary'}`}>
                          {session.status}
                        </span>
                      </td>
                      <td>{session.totalTokens}</td>
                      <td>{formatCurrency(session.totalCost)}</td>
                      <td>{new Date(session.startedAt).toLocaleString()}</td>
                      <td className="text-end">
                        <div className="btn-group btn-group-sm">
                          <Link className="btn btn-outline-primary" to={`/observability/${session.id}`}>
                            Observability
                          </Link>
                          {session.report ? (
                            <Link className="btn btn-outline-success" to={`/report/${session.report.id}`}>
                              Report
                            </Link>
                          ) : (
                            <button className="btn btn-outline-secondary" disabled>
                              Report
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function SummaryCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="col-md-3">
      <div className="card h-100">
        <div className="card-body">
          <div className="text-secondary small">{label}</div>
          <div className="fs-4 fw-semibold">{value}</div>
        </div>
      </div>
    </div>
  )
}
