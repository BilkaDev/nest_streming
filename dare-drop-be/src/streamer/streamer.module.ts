import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StreamerController } from './streamer.controller';
import { StreamerService } from './streamer.service';
import { Streamer } from './model/streamer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Streamer])],
  controllers: [StreamerController],
  providers: [StreamerService]
})
export class StreamerModule {}
