import { AppBar, Toolbar, Typography } from '@mui/material';

import * as styles from './TopBar.styles';

export const TopBar = () => {
  return (
    <AppBar sx={styles.topBar}>
      <Toolbar>
        <Typography variant="h6" component="div">
          Best Streamers
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
