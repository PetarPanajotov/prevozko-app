import z from "zod";

export const registerSchema = z.object({
  email: z.email({error: 'Имейл адреса е невалиден.'}).max(128, 'Имейла не трябва да е по-дълъг от 128 символа.'),
  password: z.string().min(8, {error: 'Паролата е твърде къса.'}).max(128, 'Паролата не трябва да е по-дълга от 128 символа.')
  .regex(/[A-Z]/, "Паролата трябва да съдържа поне една главна буква.")
  .regex(/\d/, "Паролата трябва да съдържа поне едно число.")
  .regex(/[^A-Za-z0-9]/, "Паролата трябва да съдържа поне един символ."),
})

export type registerValues = z.infer<typeof registerSchema>