import { Box, Typography } from '@mui/material';

import { AddStreamer } from './addStreamer/AddStreamer';
import * as styles from './Streamers.styles';

export const Streamers = () => {
  return (
    <Box sx={styles.container}>
      <AddStreamer />
      <Box>
        <Typography variant="h5">List streamers</Typography>
      </Box>
    </Box>
  );
};
