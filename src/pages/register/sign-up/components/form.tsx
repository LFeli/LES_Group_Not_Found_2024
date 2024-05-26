import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CalendarIcon } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'

import { ErrorMessage } from '@/components/form-error-message'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

import { SignUpFormSchema, SignUpSchema } from '../schemas/sign-up-form-schema'

export function Form() {
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
  } = useForm<SignUpFormSchema>({
    resolver: zodResolver(SignUpSchema),
  })

  function onFormSubmit(data: SignUpFormSchema) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-10">
      <div className='<div className="h-full p-2">  max-h-[450px] space-y-6 overflow-y-auto'>
        <article className="mx-1 space-y-2">
          <Label htmlFor="name">Seu nome</Label>
          <Input id="name" type="text" {...register('name')} />
          <ErrorMessage
            error={errors.name}
            placeholder="Insira o seu nome aqui."
          />
        </article>

        <article className="mx-1 space-y-2">
          <Label htmlFor="email">Seu e-mail</Label>
          <Input id="email" type="email" {...register('email')} />
          <ErrorMessage
            error={errors.email}
            placeholder="Insira o seu e-mail aqui."
          />
        </article>

        <article className="mx-1 space-y-2">
          <Label htmlFor="cpf">Seu CPF</Label>
          <Input id="cpf" type="text" {...register('cpf')} />
          <ErrorMessage error={errors.cpf} placeholder="Insira seu CPF aqui." />
        </article>

        <article className="mx-1 space-y-2">
          <Label htmlFor="dateOfBirth">Data de nascimento</Label>
          <Controller
            name="dateOfBirth"
            control={control}
            render={({ field }) => (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'w-full pl-3 text-left font-normal',
                      !field.value && 'text-muted-foreground',
                    )}
                  >
                    {field.value ? (
                      format(field.value, "dd 'de' MMMM 'de' yyyy", {
                        locale: ptBR,
                      })
                    ) : (
                      <span>Selecione uma data</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>

                <PopoverContent className="w-full">
                  <Calendar
                    mode="single"
                    locale={ptBR}
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date: Date) =>
                      date > new Date() || date < new Date('1900-01-01')
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            )}
          />
          <ErrorMessage
            error={errors.dateOfBirth}
            placeholder="Insira sua Data de nascimento aqui."
          />
        </article>

        <article className="mx-1 space-y-2">
          <Label htmlFor="cep">CEP</Label>
          <Input id="cep" {...register('cep')} />
          <ErrorMessage error={errors.cep} placeholder="Insira seu CEP aqui." />
        </article>

        <article className="mx-1 space-y-2">
          <Label htmlFor="address">Endereço</Label>
          <Input id="address" {...register('address')} />
          <ErrorMessage
            error={errors.address}
            placeholder="Insira seu endereço aqui."
          />
        </article>

        <article className="mx-1 space-y-2">
          <Label htmlFor="neighborhood">Bairro</Label>
          <Input id="neighborhood" {...register('neighborhood')} />
          <ErrorMessage
            error={errors.neighborhood}
            placeholder="Insira seu bairro aqui."
          />
        </article>

        <article className="mx-1 space-y-2">
          <Label htmlFor="number">Número</Label>
          <Input id="number" {...register('number')} />
          <ErrorMessage
            error={errors.number}
            placeholder="Insira o número aqui."
          />
        </article>

        <article className="mx-1 space-y-2">
          <Label htmlFor="street">Logradouro</Label>
          <Input id="street" {...register('street')} />
          <ErrorMessage
            error={errors.street}
            placeholder="Insira o logradouro aqui."
          />
        </article>

        <div className="grid grid-cols-2">
          <article className="mx-1 space-y-2">
            <Label htmlFor="city">Cidade</Label>
            <Input id="city" {...register('city')} />
            <ErrorMessage
              error={errors.city}
              placeholder="Insira sua cidade aqui."
            />
          </article>

          <article className="mx-1 space-y-2">
            <Label htmlFor="state">Estado</Label>
            <Input id="state" {...register('state')} />
            <ErrorMessage
              error={errors.state}
              placeholder="Insira seu estado aqui."
            />
          </article>
        </div>

        <article className="mx-1 space-y-2">
          <Label htmlFor="password">Seu senha</Label>
          <Input id="password" type="password" {...register('password')} />
          <ErrorMessage
            error={errors.password}
            placeholder="Insira sua senha aqui."
          />
        </article>

        <article className="mx-1 space-y-2">
          <Label htmlFor="confirmPassword">Confirme sua senha</Label>
          <Input
            id="password"
            type="confirmPassword"
            {...register('confirmPassword')}
          />
          <ErrorMessage
            error={errors.confirmPassword}
            placeholder="Insira sua senha novamente aqui."
          />
        </article>
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
