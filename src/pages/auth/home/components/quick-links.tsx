import { Dialog } from '@radix-ui/react-dialog'
import { AlertTriangle, Files, HandHeart, PlusCircle } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

import { NewPostDialog } from '../../components/new-post-dialog'

export function QuickLinks() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="flex flex-col items-center justify-start space-y-24 pb-32">
      <div className="mr-auto max-w-[900px] space-y-8">
        <h1 className="font-rubik text-8xl font-semibold">Acesso rápido</h1>
        <p className="block py-0 text-lg font-medium leading-relaxed text-zinc-500">
          Tenha acesso rápido as principais funções da sua conta apenas um
          clique.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-x-[130px] gap-y-12">
        <article className="overflow-hidden rounded-md">
          <Button
            variant={'ghost'}
            onClick={() => setIsOpen(true)}
            className="group h-20 whitespace-normal p-0 hover:bg-green-50"
          >
            <div className="flex h-20 w-[80px] items-center justify-center rounded-md bg-green-100">
              <PlusCircle className="h-8 w-8" />
            </div>

            <span className="flex h-full flex-col items-start justify-start gap-1 px-4 pt-2 text-left">
              <h4 className="font-rubik font-semibold group-hover:underline group-hover:underline-offset-2">
                Criar uma nova postagem
              </h4>
              <span className="text-xs">Crie agora uma nova postagem.</span>
            </span>
          </Button>
        </article>

        <article className="rounded-md">
          <Link to={'/app/meus-posts'}>
            <Button
              variant={'ghost'}
              className="group h-20 whitespace-normal p-0 hover:bg-green-50"
            >
              <div className="flex h-20 w-[80px] items-center justify-center rounded-md bg-green-100">
                <Files className="h-8 w-8" />
              </div>

              <span className="flex h-full flex-col items-start justify-start gap-1 px-4 pt-2 text-left">
                <h4 className="font-rubik font-semibold group-hover:underline group-hover:underline-offset-2">
                  Ver minhas postagens
                </h4>
                <span className="max-w-[260px] text-xs">
                  Veja uma lista de todas as suas postagens de maneira fácil.
                </span>
              </span>
            </Button>
          </Link>
        </article>

        <article className="rounded-md">
          <Link to={'/app/doacoes'}>
            <Button
              variant={'ghost'}
              className="group h-20 whitespace-normal p-0 hover:bg-green-50"
            >
              <div className="flex h-20 w-[80px] items-center justify-center rounded-md bg-green-100">
                <HandHeart className="h-8 w-8" />
              </div>

              <span className="flex h-full flex-col items-start justify-start gap-1 px-4 pt-2 text-left">
                <h4 className="font-rubik font-semibold group-hover:underline group-hover:underline-offset-2">
                  Ver doações feitas
                </h4>
                <span className="max-w-[260px] text-xs">
                  Veja todas as suas doações e acompanhe o status delas.
                </span>
              </span>
            </Button>
          </Link>
        </article>

        <article className="rounded-md">
          <Link to={'/app/denuncia'}>
            <Button
              variant={'ghost'}
              className="group h-20 whitespace-normal p-0 hover:bg-green-50"
            >
              <div className="flex h-20 w-[80px] items-center justify-center rounded-md bg-green-100">
                <AlertTriangle className="h-8 w-8" />
              </div>

              <span className="flex h-full flex-col items-start justify-start gap-1 px-4 pt-2 text-left">
                <h4 className="font-rubik font-semibold group-hover:underline group-hover:underline-offset-2">
                  Ver minhas denúncias
                </h4>
                <span className="max-w-[260px] text-xs">
                  Veja o andamento das suas denúncias feitas dentro do site.
                </span>
              </span>
            </Button>
          </Link>
        </article>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <NewPostDialog closeDialog={() => setIsOpen(false)} />
      </Dialog>
    </section>
  )
}
