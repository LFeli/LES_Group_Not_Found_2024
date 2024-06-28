import { z } from 'zod'

export const postUserSchema = z.object({
  statusPost: z.string(),
  titlePost: z.string(),
  donorName: z.string(),
  donationValue: z.string(),
  donorStatus: z.string(),
})

export type PostUserDataTableSchema = z.infer<typeof postUserSchema>
