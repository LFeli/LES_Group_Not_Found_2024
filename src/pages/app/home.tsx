import { Helmet } from 'react-helmet-async'

export function Home() {
  return (
    <main className="flex-1">
      <Helmet title="Home" />

      <div className="container max-w-screen-2xl px-6">
        <span>Home</span>
      </div>
    </main>
  )
}
