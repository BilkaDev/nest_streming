import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { SnackbarProvider } from '../context/snackbarContext/SnackbarProvider';
import { theme } from '../theme/theme';

import { AppProvidersTypes } from './AppProviders.types';
import { SocketProvider } from '../context/socketContext/SocketProvider';

const queryClient = new QueryClient();
export const AppProviders = ({ children }: AppProvidersTypes) => {
  return (
    <SocketProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SnackbarProvider>{children}</SnackbarProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </SocketProvider>
  );
};
