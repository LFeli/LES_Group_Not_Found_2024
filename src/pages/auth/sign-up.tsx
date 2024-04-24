import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SignUpSchema } from '@/schemas/sign-out-schemas'

type SignInForm = z.infer<typeof SignUpSchema>

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>()

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
          <Link to="/login">Fazer login</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tighter">
              Fazer seu cadastro
            </h1>
            <span className="text-sm text-muted-foreground">
              Faça login o seu cadastro para acessar nossa plataforma.
            </span>
          </div>

          <form onSubmit={handleSubmit(handleSign)} className="space-y-10 ">
            <div className="h-full max-h-96 space-y-6 overflow-y-auto p-2">
              <article className="space-y-2">
                <Label htmlFor="email">Seu e-mail</Label>
                <Input id="email" type="email" {...register('email')} />
              </article>

              <article className="space-y-2">
                <Label htmlFor="password">Seu senha</Label>
                <Input
                  id="password"
                  type="password"
                  {...register('password')}
                />
              </article>

              <article className="space-y-2">
                <Label htmlFor="cpf">Seu CPF</Label>
                <Input id="cpf" type="text" {...register('cpf')} />
              </article>

              <article className="space-y-2">
                <Label htmlFor="dateOfBirth">Data de nascimento</Label>
                <Input
                  id="dateOfBirth"
                  type="text"
                  {...register('dateOfBirth')}
                />
              </article>

              <article className="space-y-2">
                <Label htmlFor="address">Endereço</Label>
                <Input id="address" type="text" {...register('address')} />
              </article>

              <div className="flex gap-6">
                <article className="w-full flex-1 space-y-2">
                  <Label htmlFor="city">Cidade</Label>
                  <Input id="city" type="text" {...register('city')} />
                </article>

                <article className="max-w-20 space-y-2">
                  <Label htmlFor="state">Estado</Label>
                  <Input id="state" type="text" {...register('state')} />
                </article>
              </div>

              <div className="flex gap-6">
                <article className="w-full flex-1 space-y-2">
                  <Label htmlFor="neighborhood">Bairro</Label>
                  <Input
                    id="neighborhood"
                    type="text"
                    {...register('neighborhood')}
                  />
                </article>

                <article className="max-w-20 space-y-2">
                  <Label htmlFor="number">Número</Label>
                  <Input id="number" type="text" {...register('number')} />
                </article>
              </div>

              <div className="flex gap-6">
                <article className="w-full flex-1 space-y-2">
                  <Label htmlFor="street">Logadouro</Label>
                  <Input id="street" type="text" {...register('street')} />
                </article>

                <article className="max-w-20 space-y-2">
                  <Label htmlFor="cep">CEP</Label>
                  <Input id="cep" type="text" {...register('cep')} />
                </article>
              </div>

              <article className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  {...register('password')}
                />
              </article>

              <article className="space-y-2">
                <Label htmlFor="confirmPassword">Confirme sua senha</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  {...register('confirmPassword')}
                />
              </article>
            </div>

            <Button disabled={isSubmitting} className="w-full">
              Fazer login
            </Button>
          </form>
        </div>
      </main>
    </>
  )
}
