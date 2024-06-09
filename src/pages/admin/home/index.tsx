import { Helmet } from 'react-helmet-async'

import { AdminQuickLinks } from './components/quick-links'

export function AdminHome() {
  return (
    <>
      <Helmet title="Admin Home" />

      <div className="container max-w-screen-2xl px-6 py-16">
        <AdminQuickLinks />
      </div>
    </>
  )
}
