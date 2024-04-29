import { Helmet } from 'react-helmet-async'

import { CtaApp } from '@/components/app/cta'
import { ReasonsSponsorApp } from '@/components/app/reasons-sponsor-app'

export function Home() {
  return (
    <main className="flex-1 font-karla">
      <Helmet title="Home" />

      <div className="container max-w-screen-2xl px-6">
        <CtaApp />
        <ReasonsSponsorApp />
      </div>
    </main>
  )
}
