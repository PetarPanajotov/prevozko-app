import z from 'zod';

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

export const VehicleCharacteristicsSchema = z.object({
  load_capacity: z.number().max(100000, 'Errors.fields.password.max128').optional(),
  length: z.number().max(100000, 'Errors.fields.password.max128').optional(),
  width: z.number().max(100000, 'Errors.fields.password.max128').optional(),
  height: z.number().max(100000, 'Errors.fields.password.max128').optional(),
});

export const GeneralInformationSchema = z.object({
  service_name: z
    .email('Errors.fields.email.invalid')
    .min(1, 'Errors.fields.email.required')
    .max(128, 'Errors.fields.email.max128'),
  vehicle: z
    .string()
    .min(8, 'Errors.fields.password.min8')
    .max(128, 'Errors.fields.password.max128'),
  vehicle_characteristics: VehicleCharacteristicsSchema,
  images: z
    .array(z.instanceof(File))
    .min(1)
    .max(5)
    .refine((files) => files.every((file) => file.size <= MAX_FILE_SIZE))
    .refine((files) => files.every((file) => ACCEPTED_IMAGE_TYPES.includes(file.type))),
});

export type GeneralInformationValues = z.infer<typeof GeneralInformationSchema>;
export type VehicleCharacteristicsValues = z.infer<typeof VehicleCharacteristicsSchema>;
