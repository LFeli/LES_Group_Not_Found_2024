import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link, useLocation } from 'react-router-dom'
import { toast } from 'sonner'

import { postContent } from '@/api/get-all-posts'
import { ErrorMessage } from '@/components/form-error-message'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { TabsContent } from '@/components/ui/tabs'
import { useAuth } from '@/context/auth-context'
import { calculatePercentage } from '@/utils/calculate-percentage'

import { postTabSchema, PostTabSchemaForm } from '../schemas/post-schema'

interface PostContentTabProps {
  content: postContent
}

export function PostContentTab({ content }: PostContentTabProps) {
  const { user } = useAuth()
  const location = useLocation()

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<PostTabSchemaForm>({
    resolver: zodResolver(postTabSchema),
  })

  function onFormSubmit(data: PostTabSchemaForm) {
    try {
      console.log(data)
      reset()
      toast.success('Sua doação foi enviado com sucesso!')
    } catch {
      toast.error('Erro ao enviar sua doação! Por favor tente novamente.')
    }
  }

  return (
    <TabsContent value="post">
      <div className="max-h-[640px] space-y-8 overflow-y-auto">
        <article>
          <div className="flex items-center gap-4 pb-8">
            {/* <img
              src={content.photoURL}
              alt={`Foto da doação para o(a) ${content.title}`}
              className="w-15 h-15 overflow-hidden rounded-full bg-zinc-600 object-cover"
            /> */}

            <span>
              <h4 className="font-rubik text-lg font-semibold">
                {content.title}
              </h4>
              <span className="font-medium text-yellow-700">
                {content.donationType}
              </span>
            </span>
          </div>

          <img
            src={content.photoURL}
            alt={`Foto da doação para o(a) ${content.title}`}
            className="min-h-64 w-full rounded-md bg-zinc-600 object-cover"
          />

          <span className="block pt-8 font-karla text-sm font-medium leading-relaxed text-zinc-500">
            {content.description}
          </span>
        </article>

        <article className="space-y-4">
          <h4 className="font-rubik text-lg font-semibold">
            Total já arrecadado
          </h4>

          {content && content.donationType === 'PIX' && (
            <Progress
              value={calculatePercentage(
                content.donationGoal,
                content.donationsRaised,
              )}
              className="w-full bg-zinc-200"
            />
          )}

          <span className="flex items-center justify-between font-karla">
            <span className="text-zinc-500">
              Já conseguimos arrecadar{' '}
              <span className="font-semibold text-zinc-700">
                {calculatePercentage(
                  content.donationGoal,
                  content.donationsRaised,
                )}
                %
              </span>
            </span>
            <span className="font-semibold text-zinc-700">
              R${content.donationsRaised} / {content.donationGoal}
            </span>
          </span>
        </article>

        {user && location.pathname === '/postagens' && (
          <div className="flex items-center justify-center">
            <Link to={'/login'} className="mx-auto block pt-4">
              <Button className="bg-green-500 text-zinc-900 hover:bg-green-600">
                Fazer login para ver mais
              </Button>
            </Link>
          </div>
        )}

        {user && location.pathname !== '/postagens' && (
          <article className="space-y-4">
            <h4 className="font-rubik text-lg font-semibold">
              Realizar doação
            </h4>
            <span className="font-karla leading-relaxed text-zinc-500">
              Por favor, para realizar uma doação é necessário preencher todos
              os campos abaixo e após isso aguardar a confirmação da sua doação
              para receber o voucher.
            </span>

            <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
              <article className="mx-1 space-y-2">
                <Label htmlFor="value">Valor</Label>
                <Input id="value" type="text" {...register('value')} />

                <ErrorMessage
                  error={errors.value}
                  placeholder="Insira o valor que deseja doar aqui."
                />
              </article>

              <article className="mx-1 space-y-2">
                <Label htmlFor="proofPix">Comprovante Pix</Label>
                <Input
                  id="proofPix"
                  type="file"
                  accept="image/*"
                  {...register('proofPix')}
                />

                <ErrorMessage
                  error={errors.proofPix}
                  placeholder="Insira seu comprovante pix aqui."
                />
              </article>

              <div className="flex items-center justify-end py-8">
                <Button type="submit" disabled={isSubmitting}>
                  Enviar doação
                </Button>
              </div>
            </form>
          </article>
        )}
      </div>
    </TabsContent>
  )
}
