import { useQuery } from '@tanstack/react-query'

import { getAllPosts } from '@/api/get-all-posts'
import { PostCard } from '@/components/post-card'

export function PostsList() {
  const { data: AllPosts } = useQuery({
    queryFn: getAllPosts,
    queryKey: ['post', 'all-posts'],
  })

  return (
    <section className="grid grid-cols-3 items-start gap-10 pb-32">
      {AllPosts ? (
        AllPosts?.map((post) => (
          <PostCard
            key={post.postID}
            content={post.content}
            status={post.status}
          />
        ))
      ) : (
        <span>Carregando...</span>
      )}
    </section>
  )
}
