import { useCallback } from 'react';
import { AxiosResponse } from 'axios';

import { useSocket } from '../../../../context/scoketContext/useSocket.ts';
import { useDataCache } from '../../../../hooks/useDataCache';
import { QUERY_KEY_STREAMER, Streamer, StreamersResponse } from '../index';

export const useEventsStreamer = () => {
  const { socket } = useSocket();
  const { getDataCache, setDataCache } =
    useDataCache<AxiosResponse<StreamersResponse>>(QUERY_KEY_STREAMER);

  const onUpdateVotes = useCallback((data: { streamer: Streamer }) => {
    const dataCache = getDataCache();
    if (!dataCache) return;
    const updateDataCache = dataCache.data.map(item =>
      item.id === data.streamer.id ? data.streamer : item
    );
    setDataCache({
      ...dataCache,
      data: updateDataCache
    });
  }, []);

  const onAddedStreamer = useCallback((data: { streamer: Streamer }) => {
    const dataCache = getDataCache();
    if (!dataCache) return;
    setDataCache({
      ...dataCache,
      data: [...dataCache.data, data.streamer]
    });
  }, []);

  if (socket === undefined) return;
  socket.connect();
  socket.on('updateVotes', onUpdateVotes);
  socket.on('addedStreamer', onAddedStreamer);
  return () => {
    socket.off('updateVotes');
    socket.off('addedStreamer');
    socket.disconnect();
  };
};
