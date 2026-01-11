import z from "zod"

export const loginSchema = z.object({
  email: z.email({error: 'Имейл адреса е невалиден.'}).max(128, 'Имейла не трябва да е по-дълъг от 128 символа.'),
  password: z.string().min(8, {error: 'Паролата е твърде къса.'}).max(128, 'Паролата не трябва да е по-дълга от 128 символа.'),
})

export type LoginValues = z.infer<typeof loginSchema>