import { useFormContext } from 'react-hook-form'
import { Stack, TextField } from '@mui/material'
import { Schema } from '../types/schema'
import { RHFAutocomplete } from '../../components/RHFAutocomplete'

export function Users() {
  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext<Schema>()

  console.log(getValues())

  return (
    <Stack sx={{ gap: 2 }}>
      <TextField
        {...register('name')}
        label='name'
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        {...register('email')}
        label='email'
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <RHFAutocomplete<Schema>
        name='states'
        options={[
          { id: '1', label: 'Texas' },
          { id: '2', label: 'California' },
        ]}
      />
    </Stack>
  )
}
