import { Helmet } from 'react-helmet-async'

import { PostsList } from './components/post-list'

export function UserPosts() {
  return (
    <main className="flex-1 font-karla">
      <Helmet title="Postagens" />

      <div className="container max-w-screen-2xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-rubik text-7xl font-semibold">
            Todas as suas
            <span className="text-yellow-600"> Postagens</span>
          </h1>
          <p className="block py-8 text-lg font-medium leading-relaxed text-zinc-500">
            Veja agora todas as suas postagens estando abertas que você ja fez
            em nosso site.
          </p>
        </div>

        <PostsList />
      </div>
    </main>
  )
}
