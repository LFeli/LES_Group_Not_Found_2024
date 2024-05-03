import { z } from 'zod'

export const signInForm = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})
