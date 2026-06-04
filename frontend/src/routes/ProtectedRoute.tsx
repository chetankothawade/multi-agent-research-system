import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../hooks/useAppSelector'

export function ProtectedRoute() {
  const token = useAppSelector((state) => state.auth.accessToken)
  return token ? <Outlet /> : <Navigate to="/login" replace />
}
