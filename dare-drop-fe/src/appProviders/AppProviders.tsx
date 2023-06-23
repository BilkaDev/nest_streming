import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { SnackbarProvider } from '../context/snackbarContext/SnackbarProvider';
import { theme } from '../theme/theme';

import { AppProvidersTypes } from './AppProviders.types';

const queryClient = new QueryClient();
export const AppProviders = ({ children }: AppProvidersTypes) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider>{children}</SnackbarProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
