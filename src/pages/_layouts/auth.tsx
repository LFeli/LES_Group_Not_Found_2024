import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div>
      <span>Auth Layout</span>
      <Outlet />
    </div>
  )
}
