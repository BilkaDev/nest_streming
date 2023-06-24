import { AxiosResponse } from 'axios';
import { Box, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { fetchGetAllStreamers } from '../../api/request/streamers/streamers.request';
import { StreamersResponse } from '../../api/request/streamers';
import { TableStreamers } from '../../components/tableStreamers/TableStreamers';
import { useEventsStreamer } from '../../api/request/streamers/hooks/useEventsStreamer';

import { AddStreamer } from './addStreamer/AddStreamer';
import * as styles from './Streamers.styles';

export const Streamers = () => {
  const state = useQuery<AxiosResponse<StreamersResponse>>({
    queryKey: ['streamer'],
    queryFn: fetchGetAllStreamers,
    cacheTime: 5 * 60 * 1000,
    refetchInterval: 5 * 60 * 1000
  });
  useEventsStreamer(); // connect to be with socket io

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
