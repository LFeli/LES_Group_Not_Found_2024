import { DialogPost } from '@/components/dialog-post'
import { Button } from '@/components/ui/button'

export function MyPosts() {
  return (
    <section className="flex flex-col items-center justify-center pb-32">
      <div className="max-w-5xl text-center">
        <h2 className="font-rubik text-7xl font-semibold">Minhas postagens</h2>
        <p className="block py-8 text-lg font-medium leading-relaxed text-zinc-500">
          Nessa seção, você terá acesso a todas as suas postagens, desde aquelas
          que estão ativas até aquelas que já alcançaram sua meta
        </p>
      </div>

      <div className="grid grid-cols-3 gap-10 pt-16">
        {Array.from({ length: 3 }).map((_, index) => (
          <DialogPost key={index} />
        ))}
      </div>

      <Button className="mt-16 rounded-full bg-green-500 px-12 py-6 text-base font-medium text-black hover:bg-green-600">
        Ver minhas publicações
      </Button>
    </section>
  )
}
