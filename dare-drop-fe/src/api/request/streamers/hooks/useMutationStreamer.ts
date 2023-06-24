import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY_STREAMER } from '../streamers.constants';
import {
  fetchCreateStreamer,
  fetchUpdateVotesStreamer
} from '../streamers.request';
import { useSnackbar } from '../../../../context/snackbarContext/useSnackbar';
import { useParseError } from '../../../error/http-error';

export const useMutationStreamer = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();
  const errorParser = useParseError();

  const addStreamerState = useMutation({
    mutationKey: QUERY_KEY_STREAMER,
    mutationFn: fetchCreateStreamer,
    onSettled: () => queryClient.invalidateQueries(QUERY_KEY_STREAMER),
    onSuccess: () => showSnackbar('Streamer has been added!', 'success'),
    onError: error => showSnackbar(errorParser({ error }), 'error')
  });

  const updateVoicesState = useMutation({
    mutationKey: ['streamer'],
    mutationFn: fetchUpdateVotesStreamer,
    onSettled: () => queryClient.invalidateQueries(['streamer']),
    onSuccess: () => showSnackbar('Streamer has been update!', 'success'),
    onError: error => showSnackbar(errorParser({ error }), 'error')
  });

  return { addStreamerState, updateVoicesState };
};
