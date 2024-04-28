import { Outlet } from 'react-router-dom'

export function AdminLayout() {
  return (
    <>
      <div>
        <span>AdminLayout</span>
        <Outlet />
      </div>
    </>
  )
}
