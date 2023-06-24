import * as z from 'zod';

import { AvailablePlatforms } from '../../../platforms';
import { addStreamerSchema } from './streamers.schema';

export type Streamer = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  platform: AvailablePlatforms;
  description: string;
  upvotes: number;
  downvotes: number;
  imageUrl: string;
};

export type StreamersResponse = Streamer[];

export type AddStreamerType = z.infer<typeof addStreamerSchema> & {
  platform: string;
};

export type UpdateVotesStreamerType = {
  type: keyof Pick<Streamer, 'upvotes' | 'downvotes'>;
  id: string;
};
