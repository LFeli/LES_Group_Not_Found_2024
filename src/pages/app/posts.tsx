import { Helmet } from 'react-helmet-async'

import { CtaPostsApp } from '@/components/app/posts/cta'
import { PostsApp } from '@/components/app/posts/posts-app'

export function Posts() {
  return (
    <main className="flex-1 font-karla">
      <Helmet title="Postagens" />

      <div className="container max-w-screen-2xl px-6">
        <CtaPostsApp />
        <PostsApp />
      </div>
    </main>
  )
}
