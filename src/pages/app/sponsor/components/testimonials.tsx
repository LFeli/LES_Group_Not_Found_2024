import { Quote } from 'lucide-react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function Testimonials() {
  return (
    <div className="flex flex-col items-center justify-center gap-20 pb-8">
      <div className="max-w-[1000px] text-center">
        <h2 className="font-rubik text-7xl font-semibold">
          O que nossos
          <span className="text-yellow-600"> Patrocinadores dizem</span>
        </h2>
        <p className="block py-8 text-lg font-medium leading-relaxed text-zinc-500">
          Veja o que nossos patrocinadores têm a dizer sobre sua experiência em
          apoiar a causa animal através da nossa comunidade de apoiadores.
        </p>
      </div>

      <Carousel
        opts={{
          align: 'start',
        }}
        className="relative w-full"
      >
        <CarouselContent className="ml-0 flex items-center gap-12">
          {Array.from({ length: 6 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="max-w-[424px] overflow-hidden rounded-lg border-[4px] border-yellow-400 px-6 py-8"
            >
              <div className="flex flex-col gap-4">
                <span className="flex items-center gap-4">
                  <Quote />
                  <span className="font-rubik text-lg font-semibold">
                    Ana Rodrigues (Rações especiais)
                  </span>
                </span>
                <span className="text-zinc-800">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate, laudantium. Provident, necessitatibus doloremque?
                  Expedita quod saepe reiciendis eos. Et tempore facilis
                  corporis ad voluptatum, ab iure reprehenderit labore earum
                  veritatis!
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute -bottom-12 right-12 w-6">
          <CarouselPrevious className="h-12 w-12" />
          <CarouselNext className="h-12 w-12" />
        </div>
      </Carousel>
    </div>
  )
}
