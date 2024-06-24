import { z } from 'zod'

export const VouchersSchema = z.object({
  voucherID: z.string(),
  validateAt: z.string(),
  voucherName: z.string(),
  voucherValue: z.string(),
  status: z.string(),
})

export type VouchersDataTableSchema = z.infer<typeof VouchersSchema>
