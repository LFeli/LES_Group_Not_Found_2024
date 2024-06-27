import { useQuery } from '@tanstack/react-query'
import { ComponentProps } from 'react'

import { getPostInfos } from '@/api/get-post-infos'
import { Dialog, DialogContent } from '@/components/ui/dialog'

interface PreviewPostDialogProps extends ComponentProps<typeof Dialog> {
  postID: string | undefined
}

export function PreviewPostDialog({
  postID,
  ...props
}: PreviewPostDialogProps) {
  const { data: postInfo } = useQuery({
    queryFn: () => getPostInfos({ userID: postID }),
    queryKey: ['get-posts-infos', 'posts'],
  })

  return (
    <Dialog {...props}>
      <DialogContent className="h-[55vh]">
        <article className="overflow-y-auto">
          <div className="space-y-4">
            <h4 className="font-rubik text-lg font-semibold">
              Conteúdo da postagem
            </h4>

            <div className="space-y-2">
              <span className="font-rubik text-sm font-medium text-zinc-900">
                Imagem da postagem
              </span>
              <img
                src={postInfo?.content.imagem}
                alt={`Foto da doação para o(a) ${postInfo?.content.title}`}
                className="min-h-64 w-full rounded-md bg-zinc-600 object-cover"
              />
            </div>

            <div className="space-y-2">
              <span className="font-rubik text-sm font-medium text-zinc-900">
                Nome da postagem
              </span>
              <span className="block overflow-hidden rounded-md border-2 border-border px-4 py-2 font-karla text-sm font-medium leading-relaxed text-zinc-700">
                {postInfo?.content.title}
              </span>
            </div>

            <div className="space-y-2">
              <span className="font-rubik text-sm font-medium text-zinc-900">
                Descrição da postagem
              </span>
              <span className="block overflow-hidden rounded-md border-2 border-border px-4 py-2 font-karla text-sm font-medium leading-relaxed text-zinc-700">
                {postInfo?.content.description}
              </span>
            </div>

            <div className="space-y-2">
              <span className="font-rubik text-sm font-medium text-zinc-900">
                Descrição da postagem
              </span>
              <span className="block overflow-hidden rounded-md border-2 border-border px-4 py-2 font-karla text-sm font-medium leading-relaxed text-zinc-700">
                {postInfo?.content.description}
              </span>
            </div>
          </div>
        </article>
      </DialogContent>
    </Dialog>
  )
}
