import { DataSource } from 'typeorm';

import { Streamer } from '../streamer/model/streamer.entity';

export const sqliteDataSource = new DataSource({
  type: 'sqlite',
  database: 'db',
  logging: true,
  entities: [Streamer],
  migrations: ['dist/db/migrations/*.js'],
  synchronize: true
});
