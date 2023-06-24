import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';

import { TableStreamersType } from './TableStreamers.types';
import { TableBodyStreamers } from './tableBodyStreamers/TableBodyStreamers';
import { useMutationStreamer } from '../../api/request/streamers/hooks/useMutationStreamer';

export const TableStreamers = ({ data }: TableStreamersType) => {
  const { updateVoicesState } = useMutationStreamer();

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
            <TableBodyStreamers
              key={item.id}
              data={item}
              onMutate={updateVoicesState.mutate}
            />
          ))}
        </Table>
      </TableContainer>
    </Paper>
  );
};
