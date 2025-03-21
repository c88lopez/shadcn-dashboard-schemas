import { z } from 'zod';
import { TeamSchema } from './Team';

const baseMatchSchema = z.object({
  teams: z.tuple([TeamSchema, TeamSchema]),
  dateTime: z.string().datetime(),
  points: z.tuple([z.number(), z.number()]),
});

export const MatchSchema = baseMatchSchema;

export type Match = z.infer<typeof MatchSchema>;
