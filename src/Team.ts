import { z } from 'zod';
import { PlayerSchema } from './Player';

const baseTeamSchema = z.object({
  cuid: z.string().cuid(),
  players: z.tuple([PlayerSchema, PlayerSchema]),
});

export const TeamSchema = baseTeamSchema;

export type Team = z.infer<typeof TeamSchema>;
