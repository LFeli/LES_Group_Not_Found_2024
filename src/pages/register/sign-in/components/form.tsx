import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'

import { postSignIn } from '@/api/post-sign-in'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { setCookie } from '@/utils/cookie'

import { SignInFormSchema, SignInSchema } from '../schemas/form'

export function Form() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignInFormSchema>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: searchParams.get('email') ?? '',
    },
  })

  const { mutateAsync: authenticateFn } = useMutation({
    mutationFn: postSignIn,
    onSuccess: (data) => {
      setCookie({ name: 'omdAuth', value: data })
    },
  })

  async function onFormSubmit({ email, password }: SignInFormSchema) {
    try {
      await authenticateFn({ email, password })
      navigate('/app/')
    } catch {
      toast.error('Credenciais inválidas.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
      <article className="space-y-2">
        <Label htmlFor="email" className="font-rubik">
          Seu e-mail
        </Label>
        <Input
          id="email"
          type="email"
          disabled={isSubmitting}
          {...register('email')}
        />

        {errors.email && (
          <span className="mt-4 block text-sm font-medium text-red-500">
            {errors.email.message}
          </span>
        )}
      </article>

      <article className="space-y-2">
        <Label htmlFor="password" className="font-rubik">
          Seu senha
        </Label>
        <Input
          id="password"
          type="password"
          disabled={isSubmitting}
          {...register('password')}
        />

        {errors.password && (
          <span className="mt-4 block text-sm font-medium text-red-500">
            {errors.password.message}
          </span>
        )}
      </article>

      <Button disabled={isSubmitting} className="w-full">
        Fazer login
      </Button>
    </form>
  )
}
