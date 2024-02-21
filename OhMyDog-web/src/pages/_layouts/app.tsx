import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div>
      <span>AppLayout</span>
      <Outlet />
    </div>
  )
}
