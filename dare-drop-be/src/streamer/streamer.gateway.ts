import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';
import { Streamer } from './model/streamer.entity';

@WebSocketGateway({
  namespace: 'streamer',
  cors: {
    origin: '*'
  }
})
export class StreamerGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('StreamerGateway');

  emitVotes(streamer: Streamer) {
    this.server.emit('updateVotes', { streamer });
  }
  emitAddedStreamer(streamer: Streamer) {
    this.server.emit('addedStreamer', { streamer });
  }
  afterInit(server: Server) {
    this.logger.log('Initialized!');
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }
}
