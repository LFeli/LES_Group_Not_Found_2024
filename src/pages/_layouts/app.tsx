import { Outlet } from 'react-router-dom'

import { FooterApp } from '@/components/app/footer-app'
import { HeaderApp } from '@/components/app/header-app'

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-yellow-50">
      <HeaderApp />

      <Outlet />

      <FooterApp />
    </div>
  )
}
