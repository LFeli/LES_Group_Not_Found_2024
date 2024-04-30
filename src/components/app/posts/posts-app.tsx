import { CardApp } from './card-app'

export function PostsApp() {
  return (
    <section className="grid grid-cols-3 gap-10 pb-32">
      {Array.from({ length: 9 }).map((_, index) => (
        <CardApp key={index} />
      ))}
    </section>
  )
}
