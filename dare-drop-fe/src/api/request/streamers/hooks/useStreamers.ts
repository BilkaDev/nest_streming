import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { useSnackbar } from '../../../../context/snackbarContext/useSnackbar';
import { useParseError } from '../../../error/http-error';
import { StreamersResponse } from '../streamers.types';
import { QUERY_KEY_STREAMER } from '../streamers.constants';
import { fetchGetAllStreamers } from '../streamers.request';

export const useStreamers = () => {
  const { showSnackbar } = useSnackbar();
  const errorParser = useParseError();

  const state = useQuery<AxiosResponse<StreamersResponse>>({
    queryKey: QUERY_KEY_STREAMER,
    queryFn: fetchGetAllStreamers,
    cacheTime: 5 * 60 * 1000,
    refetchInterval: 5 * 60 * 1000,
    onError: error => showSnackbar(errorParser({ error }), 'error')
  });

  return state;
};
