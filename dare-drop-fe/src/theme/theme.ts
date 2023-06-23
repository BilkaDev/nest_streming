import { createTheme, SxProps, Theme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ff2100'
    }
  }
});

export type Styles = SxProps<Theme>;
