import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import { Streamer, StreamersResponse } from '../streamers.types';
import { QUERY_KEY_STREAMER } from '../streamers.constants';
import { fetchGetStreamer } from '../streamers.request';
import { useDataCache } from '../../../../hooks/useDataCache';

export const useStreamer = (streamerId?: string) => {
  const { dataCache } =
    useDataCache<AxiosResponse<StreamersResponse>>(QUERY_KEY_STREAMER);

  const streamerCache = dataCache?.data.find(item => item.id === streamerId);

  const { isFetched, data } = useQuery<AxiosResponse<Streamer>>({
    queryKey: [...QUERY_KEY_STREAMER, streamerId],
    queryFn: () => fetchGetStreamer(streamerId!)
  });

  return {
    streamer: streamerCache ?? data?.data,
    isFetched
  };
};
