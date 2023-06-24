import {
  Streamer,
  UpdateVotesStreamerType
} from '../../../api/request/streamers';

export type TableBodyStreamersType = {
  data: Pick<Streamer, 'name' | 'id' | 'upvotes' | 'downvotes'>;
  onMutate: (payload: UpdateVotesStreamerType) => void;
};
