import { z } from 'zod';

export const TeamSchema = z.object({
  cuid: z.string(),
  name: z
    .string()
    .min(2, { message: 'team name must be at least 2 characters' })
    .max(20, { message: 'team name must be at most 20 characters' }),
});

export const TeamCreateSchema = z.object({
  name: TeamSchema.shape.name,
});

export const TeamUpdateSchema = z.object({
  name: TeamSchema.shape.name,
});

export type Team = z.infer<typeof TeamSchema>;
