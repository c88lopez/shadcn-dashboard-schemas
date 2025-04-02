import { z } from 'zod';
import { UserGroup, UserGroupSchema } from './UserGroup';

const baseUserSchema = z.object({
  cuid: z.string().cuid(),
  email: z.string().email({ message: 'invalid email' }),
  username: z
    .string()
    .min(2, { message: 'username must be at least 2 characters' })
    .max(40, { message: 'username must be at most 40 characters' }),
  password: z
    .string()
    .min(8, { message: 'password must be at least 8 characters' }),
});

type UserWithGroups = z.infer<typeof baseUserSchema> & {
  groups: UserGroup[];
};

export const UserSchema: z.ZodType<UserWithGroups> = baseUserSchema.extend({
  groups: z.lazy(() => UserGroupSchema.array()),
});

export const UserCreateSchema = z.object({
  email: baseUserSchema.shape.email,
  username: baseUserSchema.shape.username,
  password: baseUserSchema.shape.password,
});

export const UserUpdateSchema = z.object({
  email: baseUserSchema.shape.email.optional(),
  username: baseUserSchema.shape.username.optional(),
  password: baseUserSchema.shape.password.optional().or(z.literal('')),
});

export type User = z.infer<typeof UserSchema>;
