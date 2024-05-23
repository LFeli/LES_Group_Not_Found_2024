import { z } from 'zod'

export const DonationsSchema = z.object({
  status: z.string(),
  title: z.string(),
  value: z.string(),
  createdAt: z.string(),
})

export type DonationsDataTableSchema = z.infer<typeof DonationsSchema>
