import { Helmet } from 'react-helmet-async'

import { Cta } from './components/cta'
import { Faq } from './components/faq'
import { Form } from './components/form'

export function SponsorAuth() {
  return (
    <main className="flex-1 font-karla">
      <Helmet title="Patrocinador" />

      <Cta />
      <div className="container max-w-screen-2xl space-y-32 px-6 py-32">
        <Form />
        <Faq />
      </div>
    </main>
  )
}
