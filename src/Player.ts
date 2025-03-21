import { z } from 'zod';

const basePlayerSchema = z.object({
  cuid: z.string().cuid(),
  firstName: z
    .string()
    .min(2, { message: 'first name must be at least 2 characters' }),
  lastName: z
    .string()
    .min(2, { message: 'last name must be at least 2 characters' }),
  dateOfBirth: z.string().date().optional(),
  phoneNumber: z.string().optional(),
  email: z.string().email().optional(),
  instagram: z.string().url().optional(),
});

export const PlayerSchema = basePlayerSchema;

export type Player = z.infer<typeof basePlayerSchema>;
