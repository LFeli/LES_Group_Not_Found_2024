import { z } from 'zod'

export const DonationsDataTable = z.object({
  status: z.string(),
  title: z.string(),
  value: z.string(),
  createdAt: z.string(),
})

export type DonationsTableSchema = z.infer<typeof DonationsDataTable>
