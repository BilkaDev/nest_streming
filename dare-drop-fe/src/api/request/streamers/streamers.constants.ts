export const STREAMER_URL = 'streamer';
export const QUERY_KEY_STREAMER = ['streamer'];

export const UPDATE_VOTES_STREAM_URL = (id: string) =>
  `${STREAMER_URL}/${id}/vote`;
export const GET_ONE_STREAM_URL = (id: string) => `${STREAMER_URL}/${id}`;
