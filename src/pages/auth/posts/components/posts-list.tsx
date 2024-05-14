import { DialogPost } from '@/components/dialog-post'

export function PostsList() {
  return (
    <section className="grid grid-cols-3 gap-10 pb-16">
      {Array.from({ length: 9 }).map((_, index) => (
        <DialogPost key={index} />
      ))}
    </section>
  )
}
