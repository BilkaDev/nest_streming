import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';

import { Streamer } from './model/streamer.entity';
import { CreateStreamerDto } from './dto/create-streamer-dto';
import { UpdateVotesStreamerDto } from './dto/update-streamer-dto';
import { UpdateVotesStreamerType } from './streamer.types';
import { StreamerGateway } from './streamer.gateway';

@Injectable()
export class StreamerService {
  constructor(
    @InjectRepository(Streamer)
    private streamerRepository: Repository<Streamer>,
    @Inject(StreamerGateway) private streamGateway: StreamerGateway
  ) {}

  async findBy(findBy: Pick<FindOptionsWhere<Streamer>, 'id'>) {
    const streamer = await this.streamerRepository.findOneBy(findBy);

    if (!streamer) {
      throw new NotFoundException('Streamer with given id does not exist');
    }

    return streamer;
  }

  private incrementVote(streamer: Streamer, voteType: UpdateVotesStreamerType) {
    return {
      ...streamer,
      [voteType]: streamer[voteType] + 1
    };
  }

  async findAll() {
    return await this.streamerRepository.find();
  }

  async create(createStreamerDto: CreateStreamerDto) {
    const createdStreamer = await this.streamerRepository.create(
      createStreamerDto
    );

    const streamer = await this.streamerRepository.save(createdStreamer);
    this.streamGateway.emitAddedStreamer(streamer);

    return streamer;
  }

  async updateVotes(
    id: string,
    updateVotesStreamerDto: UpdateVotesStreamerDto
  ) {
    const voteType = updateVotesStreamerDto.type;

    let streamerToBeUpdate = await this.findBy({ id });

    streamerToBeUpdate = this.incrementVote(streamerToBeUpdate, voteType);

    const streamerAfterUpdate = await this.streamerRepository.save(
      streamerToBeUpdate
    );
    this.streamGateway.emitVotes(streamerAfterUpdate);

    return streamerAfterUpdate;
  }
}
