import { IsIn, Length } from 'class-validator';
import { AvailablePlatforms, CreateStreamerDtoType } from '../streamer.types';

const validationPlatform: AvailablePlatforms[] = [
  'kick',
  'twitch',
  'rubmle',
  'tiktok',
  'youtube'
];

export class CreateStreamerDto implements CreateStreamerDtoType {
  @Length(5, 500)
  description: string;
  @Length(2, 100)
  name: string;
  @Length(2, 100)
  @IsIn(validationPlatform)
  platform: AvailablePlatforms;
}
