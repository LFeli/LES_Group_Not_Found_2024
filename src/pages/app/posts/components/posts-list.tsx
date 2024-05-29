import { useQuery } from '@tanstack/react-query'

import { getAllPosts } from '@/api/get-all-posts'
import { PostCard } from '@/components/post-card'

export function PostsList() {
  const { data: AllPosts } = useQuery({
    queryFn: getAllPosts,
    queryKey: ['post', 'all-posts'],
  })

  console.log(AllPosts)

  return (
    <section className="grid grid-cols-3 gap-10 pb-32">
      {/* {Array.from({ length: 9 }).map((_, index) => (
        <DialogPost key={index} />
      ))} */}
      {/* {AllPosts?.map((post) => (
        <PostCard key={post.postID} content={post.content} />
      ))} */}
      <span>Posts here...</span>
    </section>
  )
}
