import { Outlet } from 'react-router-dom'

import { HeaderApp } from '@/components/header-app'

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-yellow-50">
      <HeaderApp />

      <Outlet />

      <footer className="bg-zinc-800 py-16">Footer</footer>
    </div>
  )
}
