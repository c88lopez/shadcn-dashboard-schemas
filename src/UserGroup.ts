import { z } from 'zod';

export const UserGroupSchema = z.object({
  cuid: z.string(),
  name: z
    .string()
    .min(2, { message: 'group name must be at least 2 characters' })
    .max(20, { message: 'group name must be at most 20 characters' }),
});

export const UserGroupCreateSchema = z.object({
  name: UserGroupSchema.shape.name,
});

export const UserGroupUpdateSchema = z.object({
  name: UserGroupSchema.shape.name,
});

export type UserGroup = z.infer<typeof UserGroupSchema>;
