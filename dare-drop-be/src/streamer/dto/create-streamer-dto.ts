import { Length } from 'class-validator';
import { CreateStreamerDtoType } from '../streamer.types';

export class CreateStreamerDto implements CreateStreamerDtoType {
  @Length(5, 500)
  description: string;
  @Length(2, 100)
  name: string;
  @Length(2, 100)
  platform: string;
}
