import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';

export const useDataCache = <T>(queryKey: string[]) => {
  const queryClient = useQueryClient();
  const getDataCache = useCallback(
    () => queryClient.getQueryData<T>(queryKey),
    [queryClient, queryKey]
  );
  const setDataCache = useCallback(
    (data: T) => {
      queryClient.setQueryData(queryKey, data);
    },
    [queryClient, queryKey]
  );

  const dataCache = getDataCache();

  return { getDataCache, setDataCache, dataCache };
};
