import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

export function Cta() {
  return (
    <div className="min-h-[940px] bg-accent-foreground bg-[url(src/assets/app/sponsor/cta.jpg)] bg-cover bg-no-repeat">
      <div className="container flex min-h-[940px] max-w-[1060px] flex-col items-center justify-center px-6 text-center">
        <h1 className="font-rubik text-8xl font-semibold text-zinc-100">
          Seja um patrocinador
          <span className="text-yellow-600"> Agora mesmo!</span>
        </h1>
        <p className="block py-8 text-lg font-medium leading-relaxed text-zinc-100">
          Nós nos dedicamos em oferecer oportunidades de conectarmos pessoas que
          apoiam a causa animal e ajudar animais necessitados, Junte-se a nós e
          faça parte desta jornada.
        </p>

        <div className="space-x-8">
          <Link to={'/login'}>
            <Button className="rounded-full bg-jeans-700 px-6 py-6 text-zinc-100 hover:bg-jeans-500">
              Doar Agora
            </Button>
          </Link>

          <Link to={'/'}>
            <Button
              variant={'ghost'}
              className="gap-2 rounded-full px-6 py-6 text-zinc-200 hover:bg-jeans-50"
            >
              Saiba Mais <ChevronRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
