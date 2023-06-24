import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StreamerController } from './streamer.controller';
import { StreamerService } from './streamer.service';
import { Streamer } from './model/streamer.entity';
import { StreamerGateway } from './streamer.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Streamer])],
  controllers: [StreamerController],
  providers: [StreamerService, StreamerGateway]
})
export class StreamerModule {}
