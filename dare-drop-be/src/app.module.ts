import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { sqliteDataSource } from './db/datasource';
import { StreamerModule } from './streamer/streamer.module';

@Module({
  imports: [TypeOrmModule.forRoot(sqliteDataSource.options), StreamerModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
