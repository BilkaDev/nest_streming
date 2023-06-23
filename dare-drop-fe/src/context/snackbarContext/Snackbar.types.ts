import { ReactNode } from 'react';
import { AlertColor } from '@mui/material/Alert/Alert';

export type SnackbarContextValue = {
  showSnackbar: (message: string, status: AlertColor) => void;
};

export type SnackbarProviderProps = {
  children: ReactNode;
};
