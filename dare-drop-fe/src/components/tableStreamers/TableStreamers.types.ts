import { Streamer } from '../../api/request/streamers';

export type TableStreamersType = {
  data: Pick<Streamer, 'name' | 'id' | 'upvotes' | 'downvotes'>[];
};
