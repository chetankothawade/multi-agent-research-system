import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../services/api'
import { setCredentials } from '../store/authSlice'
import { useAppDispatch } from '../hooks/useAppDispatch'

export function RegisterPage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setError('')
    try {
      const { data } = await api.post('/auth/register', { name, email, password })
      dispatch(setCredentials(data))
      navigate('/dashboard')
    } catch {
      setError('Unable to create account.')
    }
  }

  return (
    <main className="auth-shell">
      <form className="auth-panel" onSubmit={onSubmit}>
        <h1 className="h4 mb-3">Register</h1>
        {error && <div className="alert alert-danger py-2">{error}</div>}
        <label className="form-label">Name</label>
        <input className="form-control mb-3" value={name} onChange={(e) => setName(e.target.value)} />
        <label className="form-label">Email</label>
        <input className="form-control mb-3" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label className="form-label">Password</label>
        <input className="form-control mb-3" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="btn btn-primary w-100" type="submit">
          Register
        </button>
        <p className="text-secondary small mt-3 mb-0">
          Have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </main>
  )
}
