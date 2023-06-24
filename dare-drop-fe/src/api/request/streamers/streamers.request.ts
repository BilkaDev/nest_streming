import { AddStreamerType, UpdateVotesStreamerType } from './streamers.types';
import { axios } from '../../axios';
import { GET_ONE_STREAM_URL, STREAMER_URL } from './streamers.constants';

export const createStreamer = (payload: AddStreamerType) =>
  axios.post(STREAMER_URL, payload);

export const updateVotesStreamer = (payload: UpdateVotesStreamerType) =>
  axios.put(GET_ONE_STREAM_URL(payload.id), { type: payload.type });

export const getAllStreamers = () => axios.get(STREAMER_URL);
