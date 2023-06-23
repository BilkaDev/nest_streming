import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import * as styles from './Layout.styles';
import { TopBar } from './topBar/TopBar';

export const Layout = () => {
  return (
    <Box sx={styles.outerContainer}>
      <TopBar />
      <Box component="main" sx={styles.contentWrapper}>
        <Outlet />
      </Box>
    </Box>
  );
};
