import { z } from 'zod'

export const ReportsSchema = z.object({
  status: z.string(),
  title: z.string(),
  reason: z.string(),
  createdAt: z.string(),
})

export type ReportsDataTableSchema = z.infer<typeof ReportsSchema>
