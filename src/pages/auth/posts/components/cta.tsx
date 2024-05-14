import { Link } from 'react-router-dom'

import ctaPhoto from '@/assets/app/home/cta-posts.jpg'
import { Button } from '@/components/ui/button'

export function Cta() {
  return (
    <section className="flex items-center justify-between pb-24">
      <div className="max-w-[600px]">
        <h1 className="font-rubik text-8xl font-semibold">
          Faça a Diferença,
          <span className="text-yellow-600"> Doe já!</span>
        </h1>
        <p className="block py-8 text-lg font-medium leading-relaxed text-zinc-500">
          Não fique indiferente! Dê uma mãozinha para um animalzinho que precise
          de ajuda. Faça sua contribuição agora mesmo e ajude a nossa causa!
        </p>

        <div className="space-x-8">
          <Link to={'/login'}>
            <Button className="rounded-full bg-jeans-700 px-6 py-6 text-zinc-100 hover:bg-jeans-500">
              Doar Agora
            </Button>
          </Link>
        </div>
      </div>

      <img
        src={ctaPhoto}
        alt=""
        className="max-w-xl overflow-hidden rounded-bl-[320px] rounded-tr-[120px] border-[6px] border-yellow-400 object-cover"
      />
    </section>
  )
}
