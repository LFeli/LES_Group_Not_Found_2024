import { useQuery } from '@tanstack/react-query'

import { getUserPosts } from '@/api/get-user-posts'
import { useAuth } from '@/context/auth-context'

export function PostsList() {
  const { user } = useAuth()

  const { data: userPosts } = useQuery({
    queryFn: () => getUserPosts({ userID: user?.idUser }),
    queryKey: ['userPosts'],
  })

  console.log(userPosts)

  return (
    <section className="grid grid-cols-3 gap-10 pb-16">
      <span>Posts here...</span>
    </section>
  )
}
