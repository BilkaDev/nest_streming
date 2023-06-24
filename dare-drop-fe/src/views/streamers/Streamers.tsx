import { Box, Typography } from '@mui/material';

import { TableStreamers } from '../../components/tableStreamers/TableStreamers';
import { useEventsStreamer } from '../../api/request/streamers/hooks/useEventsStreamer';
import { useStreamers } from '../../api/request/streamers/hooks/useStreamers';

import { AddStreamer } from './addStreamer/AddStreamer';
import * as styles from './Streamers.styles';
import { useEffect } from 'react';

export const Streamers = () => {
  const state = useStreamers();

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
