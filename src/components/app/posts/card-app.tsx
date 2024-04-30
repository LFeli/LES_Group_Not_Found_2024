import { AlertTriangle, PiggyBank, Share } from 'lucide-react'

import userExample from '@/assets/app/home/user-example.jpg'
import { Button } from '@/components/ui/button'

export function CardApp() {
  return (
    <article className="overflow-hidden rounded-[20px] bg-white">
      <img src="" alt="" className="min-h-80 bg-zinc-600 object-cover" />

      <div className="space-y-6 p-7">
        <div className="flex items-center justify-start gap-4">
          <img
            src={userExample}
            alt=""
            className="w-15 h-15 overflow-hidden rounded-full bg-zinc-600 object-cover"
          />
          <div>
            <h4 className="font-rubik text-lg font-semibold">
              Simon o gatinho de rua
            </h4>
            <span className="font-medium text-yellow-700">Medicamento</span>
          </div>
        </div>

        <p className="max-w-[380px] leading-relaxed">
          Encontrei um gatinho perdido em minha vizinhança e o acolhi em minha
          casa. Batizei-o de Simon e ele se tornou parte da minha família. No
          entanto, devido a dificuldades financeiras, estou....
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <PiggyBank className="h-8 w-8 text-green-700" />

            <span className="text-lg">800 / 1k</span>
          </div>

          <div className="space-x-4">
            <Button variant={'ghost'} className="px-4 py-6">
              <AlertTriangle className="text-yellow-700" />
            </Button>

            <Button variant={'ghost'} className="px-4 py-6">
              <Share className="text-zinc-600" />
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}
