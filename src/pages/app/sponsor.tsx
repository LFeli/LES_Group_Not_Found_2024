import { Helmet } from 'react-helmet-async'

import { BenefitsForTurnSponsorApp } from '@/components/app/sponsor/benefits-for-turn-sponsor'
import { CtaSponsorApp } from '@/components/app/sponsor/cta'
import { ReasonForTurnSponsorApp } from '@/components/app/sponsor/reasons-for-turn-sponsor'
import { TestimonialsSponsorApp } from '@/components/app/sponsor/testimonials'

export function Sponsor() {
  return (
    <main className="flex-1 font-karla">
      <Helmet title="Patrocinador" />

      <CtaSponsorApp />
      <div className="container max-w-screen-2xl space-y-32 px-6 py-32">
        <ReasonForTurnSponsorApp />
        <BenefitsForTurnSponsorApp />
        <TestimonialsSponsorApp />
      </div>
    </main>
  )
}
