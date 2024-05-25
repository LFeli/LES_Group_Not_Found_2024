import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { SignUpFormSchema, SignUpSchema } from '../schemas/form'

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignUpFormSchema>({
    resolver: zodResolver(SignUpSchema),
  })

  async function onFormSubmit() {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('Email válido.', {})
    } catch {
      toast.error('Credenciais inválidas.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-10 ">
      <div className="h-full max-h-96 space-y-6 overflow-y-auto p-2">
        <article className="space-y-2">
          <Label htmlFor="email">Seu e-mail</Label>
          <Input id="email" type="email" {...register('email')} />

          {errors.email && (
            <span className="mt-4 block text-sm font-medium text-red-500">
              {errors.email.message}
            </span>
          )}
        </article>

        <article className="space-y-2">
          <Label htmlFor="password">Seu senha</Label>
          <Input id="password" type="password" {...register('password')} />

          {errors.password && (
            <span className="mt-4 block text-sm font-medium text-red-500">
              {errors.password.message}
            </span>
          )}
        </article>

        <article className="space-y-2">
          <Label htmlFor="confirmPassword">Confirme sua senha</Label>
          <Input
            id="confirmPassword"
            type="password"
            {...register('confirmPassword')}
          />

          {errors.confirmPassword && (
            <span className="mt-4 block text-sm font-medium text-red-500">
              {errors.confirmPassword.message}
            </span>
          )}
        </article>

        <article className="space-y-2">
          <Label htmlFor="cpf">Seu CPF</Label>
          <Input id="cpf" type="text" {...register('cpf')} />

          {errors.cpf && (
            <span className="mt-4 block text-sm font-medium text-red-500">
              {errors.cpf.message}
            </span>
          )}
        </article>

        <article className="space-y-2">
          <Label htmlFor="dateOfBirth">Data de nascimento</Label>
          <Input id="dateOfBirth" type="text" {...register('dateOfBirth')} />

          {errors.dateOfBirth && (
            <span className="mt-4 block text-sm font-medium text-red-500">
              {errors.dateOfBirth.message}
            </span>
          )}
        </article>

        <article className="space-y-2">
          <Label htmlFor="address">Endereço</Label>
          <Input id="address" type="text" {...register('address')} />

          {errors.address && (
            <span className="mt-4 block text-sm font-medium text-red-500">
              {errors.address.message}
            </span>
          )}
        </article>

        <div className="flex gap-6">
          <article className="w-full flex-1 space-y-2">
            <Label htmlFor="city">Cidade</Label>
            <Input id="city" type="text" {...register('city')} />

            {errors.city && (
              <span className="mt-4 block text-sm font-medium text-red-500">
                {errors.city.message}
              </span>
            )}
          </article>

          <article className="max-w-20 space-y-2">
            <Label htmlFor="state">Estado</Label>
            <Input id="state" type="text" {...register('state')} />

            {errors.state && (
              <span className="mt-4 block text-sm font-medium text-red-500">
                {errors.state.message}
              </span>
            )}
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

            {errors.neighborhood && (
              <span className="mt-4 block text-sm font-medium text-red-500">
                {errors.neighborhood.message}
              </span>
            )}
          </article>

          <article className="max-w-20 space-y-2">
            <Label htmlFor="number">Número</Label>
            <Input id="number" type="text" {...register('number')} />

            {errors.number && (
              <span className="mt-4 block text-sm font-medium text-red-500">
                {errors.number.message}
              </span>
            )}
          </article>
        </div>

        <div className="flex gap-6">
          <article className="w-full flex-1 space-y-2">
            <Label htmlFor="street">Logadouro</Label>
            <Input id="street" type="text" {...register('street')} />

            {errors.street && (
              <span className="mt-4 block text-sm font-medium text-red-500">
                {errors.street.message}
              </span>
            )}
          </article>

          <article className="max-w-20 space-y-2">
            <Label htmlFor="cep">CEP</Label>
            <Input id="cep" type="text" {...register('cep')} />

            {errors.cep && (
              <span className="mt-4 block text-sm font-medium text-red-500">
                {errors.cep.message}
              </span>
            )}
          </article>
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-800 hover:bg-blue-700"
      >
        Criar conta
      </Button>
    </form>
  )
}
