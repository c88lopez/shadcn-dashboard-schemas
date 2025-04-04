import { z } from 'zod';
import { User, UserSchema } from './User';

const baseUserGroupSchema = z.object({
  cuid: z.string().cuid(),
  name: z
    .string()
    .min(2, { message: 'group name must be at least 2 characters' })
    .max(20, { message: 'group name must be at most 20 characters' }),
});

type UserGroupWithUsers = z.infer<typeof baseUserGroupSchema> & {
  users: User[];
};

export const UserGroupSchema: z.ZodType<UserGroupWithUsers> =
  baseUserGroupSchema.extend({
    users: z.lazy(() => UserSchema.array()),
  });

export const UserGroupCreateSchema = z.object({
  name: baseUserGroupSchema.shape.name,
  users: z.array(z.string().cuid()).optional(),
});

export const UserGroupUpdateSchema = UserGroupCreateSchema.partial();

export type UserGroup = z.infer<typeof UserGroupSchema>;
