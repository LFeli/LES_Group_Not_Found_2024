import { Helmet } from 'react-helmet-async'

import { BenefitsApp } from '@/components/app/benefits-app'
import { CtaApp } from '@/components/app/cta'
import { FrequentlyAskedQuestionsApp } from '@/components/app/frequently-asked-questions'
import { ReasonsSponsorApp } from '@/components/app/reasons-sponsor-app'

export function Home() {
  return (
    <main className="flex-1 font-karla">
      <Helmet title="Home" />

      <div className="container max-w-screen-2xl px-6">
        <CtaApp />
        <ReasonsSponsorApp />
        <BenefitsApp />
        <FrequentlyAskedQuestionsApp />
      </div>
    </main>
  )
}
