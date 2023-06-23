import { Streamer } from './model/streamer.entity';

// DTO types
export type CreateStreamerDtoType = Omit<
  Streamer,
  'updatedAt' | 'createdAt' | 'imageUrl' | 'upvotes' | 'downvotes' | 'id'
>;

export type UpdateVotesStreamerType = keyof Pick<
  Streamer,
  'upvotes' | 'downvotes'
>;
