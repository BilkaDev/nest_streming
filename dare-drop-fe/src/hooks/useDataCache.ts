import { useQueryClient } from '@tanstack/react-query';

export const useDataCache = <T>(queryKey: string[]) => {
  const queryClient = useQueryClient();
  const getDataCache = () => queryClient.getQueryData<T>(queryKey);
  const setDataCache = (data: T) => {
    queryClient.setQueryData(queryKey, data);
  };

  const dataCache = getDataCache();

  return { getDataCache, setDataCache, dataCache };
};
