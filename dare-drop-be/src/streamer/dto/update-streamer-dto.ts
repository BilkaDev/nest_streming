import { IsIn } from 'class-validator';

import { UpdateVotesStreamerType } from '../streamer.types';

const validateArray: UpdateVotesStreamerType[] = ['upvotes', 'downvotes'];

export class UpdateVotesStreamerDto {
  @IsIn(validateArray)
  type: UpdateVotesStreamerType;
}
