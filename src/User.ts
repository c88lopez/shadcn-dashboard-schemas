import { z } from 'zod';

export const UserSchema = z.object({
  cuid: z.string(),
  email: z.string().email({ message: 'invalid email' }),
  username: z
    .string()
    .min(2, { message: 'username must be at least 2 characters' })
    .max(20, { message: 'username must be at most 20 characters' }),
  password: z
    .string()
    .min(8, { message: 'password must be at least 8 characters' }),
});

export const UserCreateSchema = z.object({
  email: z.string().email({ message: 'invalid email' }),
  username: z
    .string()
    .min(2, { message: 'username must be at least 2 characters' })
    .max(20, { message: 'username must be at most 20 characters' }),
  password: z
    .string()
    .min(8, { message: 'password must be at least 8 characters' }),
});

export const UserUpdateSchema = z.object({
  email: z.string().email({ message: 'invalid email' }),
  username: z
    .string()
    .min(2, { message: 'username must be at least 2 characters' })
    .max(20, { message: 'username must be at most 20 characters' }),
  password: z
    .string()
    .min(8, { message: 'password must be at least 8 characters' })
    .optional()
    .or(z.literal('')),
});
