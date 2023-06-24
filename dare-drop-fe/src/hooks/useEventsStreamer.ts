import { useSocket } from '../context/scoketContext/useSocket.ts';
import { useCallback, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import { useQueryClient } from '@tanstack/react-query';

import { Streamer, StreamerResponse } from '../api/request/streamers';

export const useEventsStreamer = () => {
  const queryClient = useQueryClient();

  const onUpdateVotes = useCallback(
    (data: { streamer: Streamer }) => {
      const dataCache = queryClient.getQueryData<
        AxiosResponse<StreamerResponse>
      >(['streamer']);
      if (!dataCache) return;
      const updateDataCache = dataCache.data.map(item =>
        item.id === data.streamer.id ? data.streamer : item
      );
      queryClient.setQueryData(['streamer'], {
        ...dataCache,
        data: updateDataCache
      });
    },
    [queryClient]
  );

  const onAddedStreamer = useCallback(
    (data: { streamer: Streamer }) => {
      const dataCache = queryClient.getQueryData<
        AxiosResponse<StreamerResponse>
      >(['streamer']);
      if (!dataCache) return;
      queryClient.setQueryData(['streamer'], {
        ...dataCache,
        data: [...dataCache.data, data.streamer]
      });
    },
    [queryClient]
  );

  const { socket } = useSocket();
  useEffect(() => {
    socket?.connect();
    socket?.on('updateVotes', onUpdateVotes);
    socket?.on('addedStreamer', onAddedStreamer);
    return () => {
      socket?.off('updateVotes');
      socket?.off('addedStreamer');
      socket?.disconnect();
    };
  }, [onAddedStreamer, onUpdateVotes]);
};
