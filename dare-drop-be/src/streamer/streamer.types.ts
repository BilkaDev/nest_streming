import { Streamer } from './model/streamer.entity';

export type AvailablePlatforms =
  | 'twitch'
  | 'tiktok'
  | 'kick'
  | 'youtube'
  | 'rubmle';

// DTO types
export type CreateStreamerDtoType = Omit<
  Streamer,
  'updatedAt' | 'createdAt' | 'imageUrl' | 'upvotes' | 'downvotes' | 'id'
>;

export type UpdateVotesStreamerType = keyof Pick<
  Streamer,
  'upvotes' | 'downvotes'
>;
