import { useMemo } from 'react';
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody
} from '@mui/material';

import { TableBodyStreamers } from './tableBodyStreamers/TableBodyStreamers';
import { useMutationStreamer } from '../../api/request/streamers/hooks/useMutationStreamer';

import { TableStreamersType } from './TableStreamers.types';

export const TableStreamers = ({ data }: TableStreamersType) => {
  const { updateVoicesState } = useMutationStreamer();

  const dataBody = useMemo(
    () =>
      data.map(item => (
        <TableBodyStreamers
          key={item.id}
          data={item}
          onMutate={updateVoicesState.mutate}
        />
      )),
    [data, updateVoicesState.mutate]
  );
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
          <TableBody>{dataBody}</TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
