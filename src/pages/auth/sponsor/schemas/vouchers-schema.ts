import { z } from 'zod'

export const VouchersSchema = z.object({
  status: z.string(),
  title: z.string(),
  value: z.string(),
  createdAt: z.string(),
  isUse: z.string(),
  dateOfUse: z.string(),
})

export type VouchersDataTableSchema = z.infer<typeof VouchersSchema>
