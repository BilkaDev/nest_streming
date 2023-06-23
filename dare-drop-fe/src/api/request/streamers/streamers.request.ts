import { AddStreamerType } from './streamers.types';
import { axios } from '../../axios';
import { STREAMER_URL } from './streamers.constants';

export const createStreamer = (payload: AddStreamerType) =>
  axios.post(STREAMER_URL, payload);
