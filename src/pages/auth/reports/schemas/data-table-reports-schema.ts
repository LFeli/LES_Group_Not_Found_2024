import { z } from 'zod'

export const ReportsSchema = z.object({
  title: z.string(),
  description: z.string(),
  reportedAt: z.string(),
  postID: z.number(),
})

export type ReportsDataTableSchema = z.infer<typeof ReportsSchema>
