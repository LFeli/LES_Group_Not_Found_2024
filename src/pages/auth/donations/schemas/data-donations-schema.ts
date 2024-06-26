import { z } from 'zod'

export const DonationsSchema = z.object({
  postID: z.string(),
  status: z.string(),
  message: z.string(),
  donationValue: z.string(),
  donatedAt: z.string(),
  voucher: z.string(),
})

export type DonationsDataTableSchema = z.infer<typeof DonationsSchema>
