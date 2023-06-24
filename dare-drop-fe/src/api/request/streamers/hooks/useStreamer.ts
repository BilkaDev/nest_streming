import { useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import { Streamer, StreamersResponse } from '../streamers.types';
import { QUERY_KEY_STREAMER } from '../streamers.constants';
import { fetchGetStreamer } from '../streamers.request';

export const useStreamer = (streamerId?: string) => {
  const queryClient = useQueryClient();

  const cacheDate =
    queryClient.getQueryData<AxiosResponse<StreamersResponse>>(
      QUERY_KEY_STREAMER
    );
  const streamerCache = cacheDate?.data.find(item => item.id === streamerId);

  const { isFetched, data } = useQuery<AxiosResponse<Streamer>>({
    queryKey: [...QUERY_KEY_STREAMER, streamerId],
    queryFn: () => fetchGetStreamer(streamerId!),
    onSuccess: ({ data }) => {},
    enabled: !streamerCache && !!streamerId
  });

  return {
    streamer: streamerCache ?? data?.data,
    isFetched
  };
};
