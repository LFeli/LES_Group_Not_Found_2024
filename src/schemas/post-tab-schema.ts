import { z } from 'zod'

const valueSchema = z
  .string({ required_error: 'E necessário ter um valor' })
  .min(1, { message: 'O campo Valor e obrigatório.' })

const pixKeySchema = z
  .string({ required_error: 'E necessário ter uma chave pix' })
  .min(1, { message: 'O campo Chave Pix e obrigatório.' })

const proofPixSchema = z
  .instanceof(FileList)
  .refine((file) => file?.length === 1, {
    message: 'O campo comprovante e obrigatório',
  })

export const postTabSchema = z.object({
  value: valueSchema,
  pixKey: pixKeySchema,
  proofPix: proofPixSchema,
})
