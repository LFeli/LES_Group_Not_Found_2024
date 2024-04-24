import { z } from 'zod'

const nameSchema = z.string()

const emailSchema = z.string().email()

const cpfSchema = z
  .string()
  .min(14, {
    message: 'CPF deve conter 11 números',
  })
  .refine((value) => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value), {
    message: 'CPF inválido',
  })

const dateOfBirthSchema = z.date()

const addressSchema = z.string()

const citySchema = z.string()

const stateSchema = z.string()

const neighborhoodSchema = z.string()

const numberSchema = z.string()

const streetSchema = z.string()

const cepSchema = z
  .string()
  .refine((value: string) => /^\d{5}-\d{3}$/.test(value), {
    message: 'CEP inválido',
  })

const passwordSchema = z.string()

const confirmPasswordSchema = z.string().min(8, {
  message: 'Senha deve ter no mínimo 8 caracteres',
})

export const SignUpSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  cpf: cpfSchema,
  dateOfBirth: dateOfBirthSchema,
  address: addressSchema,
  city: citySchema,
  state: stateSchema,
  neighborhood: neighborhoodSchema,
  number: numberSchema,
  street: streetSchema,
  cep: cepSchema,
  password: passwordSchema,
  confirmPassword: confirmPasswordSchema,
})
