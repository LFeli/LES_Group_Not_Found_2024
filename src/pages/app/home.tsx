import { Helmet } from 'react-helmet-async'

import { CtaApp } from '@/components/app/cta'

export function Home() {
  return (
    <main className="flex-1 font-karla">
      <Helmet title="Home" />

      <div className="container max-w-screen-2xl px-6">
        <CtaApp />
      </div>
    </main>
  )
}
