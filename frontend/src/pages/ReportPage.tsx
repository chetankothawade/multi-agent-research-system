import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { api } from '../services/api'

interface ReportReference {
  title: string
  url: string
  snippet?: string
  qualityScore?: number
}

interface ReportResponse {
  id: string
  sessionId: string
  executiveSummary: string
  keyFindings: unknown
  detailedAnalysis?: string | null
  references: unknown
  conclusion: string
  createdAt: string
  session: {
    id: string
    topic: string
    status: string
  }
}

function toStringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.map((item) => String(item)) : []
}

function toReferences(value: unknown): ReportReference[] {
  if (!Array.isArray(value)) return []

  return value.map((item) => {
    const reference = item as Partial<ReportReference>
    return {
      title: String(reference.title ?? 'Untitled source'),
      url: String(reference.url ?? '#'),
      snippet: reference.snippet,
      qualityScore: reference.qualityScore,
    }
  })
}

export function ReportPage() {
  const { id } = useParams()
  const [report, setReport] = useState<ReportResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!id) return

    setLoading(true)
    api
      .get<ReportResponse>(`/report/${id}`)
      .then(({ data }) => {
        setReport(data)
        setError('')
      })
      .catch(() => setError('Unable to load report.'))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return <div className="alert alert-info">Loading report...</div>
  }

  if (error || !report) {
    return <div className="alert alert-danger">{error || 'Report not found.'}</div>
  }

  const keyFindings = toStringArray(report.keyFindings)
  const references = toReferences(report.references)

  return (
    <div>
      <div className="d-flex flex-wrap justify-content-between align-items-start gap-3 mb-4">
        <div>
          <h1 className="h3 mb-1">{report.session.topic}</h1>
          <div className="text-secondary small">Report generated {new Date(report.createdAt).toLocaleString()}</div>
        </div>
        <Link className="btn btn-outline-primary btn-sm" to={`/observability/${report.sessionId}`}>
          View Observability
        </Link>
      </div>

      <section className="card mb-3">
        <div className="card-body">
          <h2 className="h5">Executive Summary</h2>
          <p className="mb-0">{report.executiveSummary}</p>
        </div>
      </section>

      <section className="card mb-3">
        <div className="card-body">
          <h2 className="h5">Key Findings</h2>
          {keyFindings.length === 0 ? (
            <p className="text-secondary mb-0">No key findings were saved.</p>
          ) : (
            <ul className="mb-0">
              {keyFindings.map((finding) => (
                <li key={finding}>{finding}</li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="card mb-3">
        <div className="card-body">
          <h2 className="h5">Detailed Analysis</h2>
          <pre className="report-text mb-0">{report.detailedAnalysis || 'No detailed analysis was saved.'}</pre>
        </div>
      </section>

      <section className="card mb-3">
        <div className="card-body">
          <h2 className="h5">References</h2>
          {references.length === 0 ? (
            <p className="text-secondary mb-0">No references were saved.</p>
          ) : (
            <div className="list-group">
              {references.map((reference) => (
                <a className="list-group-item list-group-item-action" href={reference.url} key={reference.url} rel="noreferrer" target="_blank">
                  <div className="fw-semibold">{reference.title}</div>
                  <div className="small text-break">{reference.url}</div>
                  {reference.snippet && <div className="small text-secondary mt-1">{reference.snippet}</div>}
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="card">
        <div className="card-body">
          <h2 className="h5">Conclusion</h2>
          <p className="mb-0">{report.conclusion}</p>
        </div>
      </section>
    </div>
  )
}
