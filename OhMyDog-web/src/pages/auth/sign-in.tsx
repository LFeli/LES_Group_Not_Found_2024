import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signInForm = z.object({
  email: z.string().email(),
  password: z.number().min(6),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const [searchParams] = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({
    defaultValues: {
      email: searchParams.get('email') ?? '',
    },
  })

  async function handleSign() {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('Email válido.', {})
    } catch {
      toast.error('Credenciais inválidas.')
    }
  }

  return (
    <>
      <Helmet title="Login" />

      <main className="p-8">
        <Button variant={'ghost'} className="absolute right-8 top-8">
          <Link to="/cadastro">Fazer cadastro</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tighter">
              Acessar seu cadastro
            </h1>
            <span className="text-sm text-muted-foreground">
              Faça login e acesse todos os nossos conteúdos.
            </span>
          </div>

          <form onSubmit={handleSubmit(handleSign)} className="space-y-6">
            <article className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </article>

            <article className="space-y-2">
              <Label htmlFor="password">Seu senha</Label>
              <Input id="password" type="password" {...register('password')} />
            </article>

            <Button disabled={isSubmitting} className="w-full">
              Fazer login
            </Button>
          </form>
        </div>
      </main>
    </>
  )
}
