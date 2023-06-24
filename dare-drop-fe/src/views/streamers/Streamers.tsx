import { AxiosResponse } from 'axios';
import { Box, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { getAllStreamers } from '../../api/request/streamers/streamers.request';
import { StreamerResponse } from '../../api/request/streamers';
import { TableStreamers } from '../../components/tableStreamers/TableStreamers';
import { useEventsStreamer } from '../../hooks/useEventsStreamer';

import { AddStreamer } from './addStreamer/AddStreamer';
import * as styles from './Streamers.styles';

export const Streamers = () => {
  const state = useQuery<AxiosResponse<StreamerResponse>>({
    queryKey: ['streamer'],
    queryFn: getAllStreamers
  });
  useEventsStreamer();

  const data = state?.data?.data ?? [];

  return (
    <Box sx={styles.container}>
      <AddStreamer />
      <Box sx={styles.tableContainer}>
        <Typography sx={styles.tableHeader} variant="h5">
          List streamers
        </Typography>
        <TableStreamers data={data} />
      </Box>
    </Box>
  );
};
