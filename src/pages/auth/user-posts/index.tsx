import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'

import { getUserPosts } from '@/api/get-user-posts'
import { useAuth } from '@/context/auth-context'

import { DataTable } from './components/data-table'
import { columns } from './components/data-table-columns'

export function UserPosts() {
  const { user } = useAuth()

  const { data: userPosts, isPending } = useQuery({
    queryFn: () => getUserPosts({ userID: user?.idUser }),
    queryKey: ['post', 'all-posts'],
  })

  return (
    <main className="flex-1 font-karla">
      <Helmet title="Postagens" />

      <div className="container max-w-screen-2xl space-y-4 px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-rubik text-7xl font-semibold">
            Todas as suas
            <span className="text-yellow-600"> Postagens</span>
          </h1>
          <p className="block py-8 text-lg font-medium leading-relaxed text-zinc-500">
            Veja todas as suas postagens e doações que você recebeu em nosso
            site.
          </p>
        </div>

        {isPending ? (
          <div>carregando...</div>
        ) : (
          <DataTable columns={columns} data={userPosts} />
        )}
      </div>
    </main>
  )
}
