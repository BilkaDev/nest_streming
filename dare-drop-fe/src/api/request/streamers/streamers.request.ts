import { AddStreamerType, UpdateVotesStreamerType } from './streamers.types';
import { axios } from '../../axios';
import {
  UPDATE_VOTES_STREAM_URL,
  STREAMER_URL,
  GET_ONE_STREAM_URL
} from './streamers.constants';

export const fetchCreateStreamer = (payload: AddStreamerType) =>
  axios.post(STREAMER_URL, payload);

export const fetchUpdateVotesStreamer = (payload: UpdateVotesStreamerType) =>
  axios.put(UPDATE_VOTES_STREAM_URL(payload.id), { type: payload.type });

export const fetchGetAllStreamers = () => axios.get(STREAMER_URL);
export const fetchGetStreamer = (streamerId: string) =>
  axios.get(GET_ONE_STREAM_URL(streamerId));
