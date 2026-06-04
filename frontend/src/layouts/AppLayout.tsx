import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { logout } from '../store/authSlice'
import { useAppDispatch } from '../hooks/useAppDispatch'

export function AppLayout() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
        <div className="container">
          <Link className="navbar-brand fw-semibold" to="/dashboard">
            Deep Research
          </Link>
          <div className="navbar-nav me-auto">
            <NavLink className="nav-link" to="/dashboard">
              Dashboard
            </NavLink>
            <NavLink className="nav-link" to="/research">
              Research
            </NavLink>
          </div>
          <button className="btn btn-outline-secondary btn-sm" onClick={onLogout}>
            Logout
          </button>
        </div>
      </nav>
      <main className="container py-4">
        <Outlet />
      </main>
    </>
  )
}
