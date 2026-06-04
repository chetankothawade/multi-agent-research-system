import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../services/api'
import { setCredentials } from '../store/authSlice'
import { useAppDispatch } from '../hooks/useAppDispatch'

export function LoginPage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setError('')
    try {
      const { data } = await api.post('/auth/login', { email, password })
      dispatch(setCredentials(data))
      navigate('/dashboard')
    } catch {
      setError('Invalid email or password.')
    }
  }

  return (
    <main className="auth-shell">
      <form className="auth-panel" onSubmit={onSubmit}>
        <h1 className="h4 mb-3">Login</h1>
        {error && <div className="alert alert-danger py-2">{error}</div>}
        <label className="form-label">Email</label>
        <input className="form-control mb-3" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label className="form-label">Password</label>
        <input className="form-control mb-3" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="btn btn-primary w-100" type="submit">
          Login
        </button>
        <p className="text-secondary small mt-3 mb-0">
          No account? <Link to="/register">Register</Link>
        </p>
      </form>
    </main>
  )
}
