import z from 'zod';

export const registerSchema = z.object({
  email: z
    .email('Errors.fields.email.invalid')
    .min(1, 'Errors.fields.email.required')
    .max(128, 'Errors.fields.email.max'),
  password: z
    .string()
    .min(8, 'Errors.fields.password.min8')
    .max(128, 'Errors.fields.password.max')
    .regex(/[A-Z]/, 'Errors.fields.password.uppercase')
    .regex(/\d/, 'Errors.fields.password.number')
    .regex(/[^A-Za-z0-9]/, 'Errors.fields.password.symbol'),
});

export type registerValues = z.infer<typeof registerSchema>;
