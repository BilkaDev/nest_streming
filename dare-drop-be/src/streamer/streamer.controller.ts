import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

import { StreamerService } from './streamer.service';
import { CreateStreamerDto } from './dto/create-streamer-dto';
import { UpdateVotesStreamerDto } from './dto/update-streamer-dto';

@Controller('streamer')
export class StreamerController {
  constructor(private readonly streamerService: StreamerService) {}

  @Get()
  getAllStreamer() {
    return this.streamerService.findAll();
  }

  @Get(':id')
  getStreamer(@Param('id') streamerId: string) {
    return this.streamerService.findBy({ id: streamerId });
  }

  @Post()
  createStreamer(@Body() createStreamerDto: CreateStreamerDto) {
    return this.streamerService.create(createStreamerDto);
  }

  @Put(':id/vote')
  updateStreamer(
    @Param('id') streamerId: string,
    @Body() updateVotesStreamerDto: UpdateVotesStreamerDto
  ) {
    return this.streamerService.updateVotes(streamerId, updateVotesStreamerDto);
  }
}
