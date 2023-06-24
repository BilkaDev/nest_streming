import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../../AppRoute';

import * as styles from './TopBar.styles';

export const TopBar = () => {
  return (
    <AppBar sx={styles.topBar}>
      <Toolbar>
        <Typography
          sx={styles.link}
          to={AppRoute.streamer}
          variant="h6"
          component={Link}
        >
          Best Streamers
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
