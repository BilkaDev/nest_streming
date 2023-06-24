import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateVotesStreamer } from '../../api/request/streamers/streamers.request';
import { useSnackbar } from '../../context/snackbarContext/useSnackbar';
import { useParseError } from '../../api/error/http-error';

import { TableStreamersType } from './TableStreamers.types';
import { TableBodyStreamers } from './tableBodyStreamers/TableBodyStreamers';

export const TableStreamers = ({ data }: TableStreamersType) => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();
  const errorParser = useParseError();

  const { mutate } = useMutation({
    mutationKey: ['streamer'],
    mutationFn: updateVotesStreamer,
    onSettled: () => queryClient.invalidateQueries(['streamer']),
    onSuccess: () => showSnackbar('Streamer has been update!', 'success'),
    onError: error => showSnackbar(errorParser({ error }), 'error')
  });

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Up votes</TableCell>
              <TableCell>Down votes</TableCell>
            </TableRow>
          </TableHead>
          {data.map(item => (
            <TableBodyStreamers key={item.id} data={item} onMutate={mutate} />
          ))}
        </Table>
      </TableContainer>
    </Paper>
  );
};
