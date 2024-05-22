import { z } from 'zod'

export const schema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Must be a valid email' }),
})

export type Schema = z.infer<typeof schema>
