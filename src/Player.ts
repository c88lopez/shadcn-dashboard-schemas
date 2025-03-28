import { z } from 'zod';

const basePlayerSchema = z.object({
  cuid: z.string().cuid(),
  firstName: z
    .string({
      required_error: 'first name is required',
      invalid_type_error: 'first name must be a string',
    })
    .min(2, { message: 'first name must be at least 2 characters' }),
  lastName: z
    .string({
      required_error: 'last name is required',
      invalid_type_error: 'last name must be a string',
    })
    .min(2, { message: 'last name must be at least 2 characters' }),
  dateOfBirth: z.number().optional(),
  phoneNumber: z.string().optional(),
  email: z.string().email().optional(),
  instagram: z.string().url().optional(),
});

export const PlayerSchema = basePlayerSchema;

export const CreatePlayerSchema = z.object({
  firstName: basePlayerSchema.shape.firstName,
  lastName: basePlayerSchema.shape.lastName,
  dateOfBirth: basePlayerSchema.shape.dateOfBirth,
  phoneNumber: basePlayerSchema.shape.phoneNumber,
  email: basePlayerSchema.shape.email,
  instagram: basePlayerSchema.shape.instagram,
});

export const UpdatePlayerSchema = z.object({
  firstName: basePlayerSchema.shape.firstName.optional(),
  lastName: basePlayerSchema.shape.lastName.optional(),
  dateOfBirth: basePlayerSchema.shape.dateOfBirth,
  phoneNumber: basePlayerSchema.shape.phoneNumber,
  email: basePlayerSchema.shape.email,
  instagram: basePlayerSchema.shape.instagram,
});

export type Player = z.infer<typeof basePlayerSchema>;
