import { z } from 'zod'

export const schema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Must be a valid email address' }),
  states: z.array(z.string()).min(1).max(2),
})

export type Schema = z.infer<typeof schema>

export const defaultValues: Schema = {
  name: '',
  email: '',
  states: [],
}
