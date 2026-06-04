import { useEffect, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { io } from 'socket.io-client'
import { api } from '../services/api'

interface AgentEvent {
  type: string
  message: string
  timestamp: string
}

interface ResearchSession {
  id: string
  status: string
  report?: {
    id: string
  } | null
}

export function ResearchPage() {
  const [topic, setTopic] = useState('')
  const [sessionId, setSessionId] = useState('')
  const [session, setSession] = useState<ResearchSession | null>(null)
  const [events, setEvents] = useState<AgentEvent[]>([])

  useEffect(() => {
    if (!sessionId) return
    const socket = io(import.meta.env.VITE_API_URL ?? 'http://localhost:4000')
    socket.emit('session:join', sessionId)
    socket.on('agent:event', (event: AgentEvent) => {
      setEvents((current) => [event, ...current])
      if (event.type === 'session.completed') {
        api.get<ResearchSession>(`/research/${sessionId}`).then(({ data }) => setSession(data))
      }
    })
    return () => {
      socket.emit('session:leave', sessionId)
      socket.disconnect()
    }
  }, [sessionId])

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const { data } = await api.post('/research/start', { topic })
    setSessionId(data.sessionId)
    setSession(null)
    setEvents([])
  }

  return (
    <div className="row g-4">
      <div className="col-lg-5">
        <h1 className="h3 mb-3">Research</h1>
        <form className="card" onSubmit={onSubmit}>
          <div className="card-body">
            <label className="form-label">Topic</label>
            <textarea className="form-control mb-3" rows={5} value={topic} onChange={(e) => setTopic(e.target.value)} />
            <button className="btn btn-primary" disabled={topic.length < 3}>
              Start
            </button>
          </div>
        </form>
        {sessionId && (
          <div className="card mt-3">
            <div className="card-body">
              <div className="small text-secondary mb-2">Session</div>
              <div className="text-break small mb-3">{sessionId}</div>
              <div className="d-flex flex-wrap gap-2">
                <Link className="btn btn-outline-primary btn-sm" to={`/observability/${sessionId}`}>
                  Observability
                </Link>
                {session?.report && (
                  <Link className="btn btn-outline-success btn-sm" to={`/report/${session.report.id}`}>
                    Report
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="col-lg-7">
        <h2 className="h5 mb-3">Live Agent Feed</h2>
        <div className="list-group">
          {events.length === 0 && <div className="list-group-item text-secondary">No events yet.</div>}
          {events.map((event, index) => (
            <div className="list-group-item" key={`${event.timestamp}-${index}`}>
              <div className="fw-semibold">{event.message}</div>
              <div className="small text-secondary">{event.type}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
