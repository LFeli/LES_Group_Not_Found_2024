import { Helmet } from 'react-helmet-async'

import { BenefitsApp } from '@/components/app/home/benefits-app'
import { CtaApp } from '@/components/app/home/cta'
import { FrequentlyAskedQuestionsApp } from '@/components/app/home/frequently-asked-questions'
import { ReasonsSponsorApp } from '@/components/app/home/reasons-sponsor-app'

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
