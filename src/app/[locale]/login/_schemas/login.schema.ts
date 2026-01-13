import z from 'zod';

export const loginSchema = z.object({
  email: z
    .email('Errors.fields.email.invalid')
    .min(1, 'Errors.fields.email.required')
    .max(128, 'Errors.fields.email.max128'),
  password: z
    .string()
    .min(8, 'Errors.fields.password.min8')
    .max(128, 'Errors.fields.password.max128'),
});

export type LoginValues = z.infer<typeof loginSchema>;
