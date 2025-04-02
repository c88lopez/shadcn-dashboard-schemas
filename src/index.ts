import { z } from 'zod';

export * from './User';
export * from './UserGroup';
export * from './Player';
export * from './Team';
export * from './Match';

export function isZodError(error: unknown): error is z.ZodError {
  return error instanceof z.ZodError;
}
