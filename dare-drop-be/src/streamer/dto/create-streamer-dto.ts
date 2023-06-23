import { Length } from 'class-validator';
import { CreateStreamerDtoType } from '../streamer.types';

export class CreateStreamerDto implements CreateStreamerDtoType {
  @Length(5, 500)
  description: string;
  @Length(1, 100)
  name: string;
  @Length(1, 100)
  platform: string;
}
