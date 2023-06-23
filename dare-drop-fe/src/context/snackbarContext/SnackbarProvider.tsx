import { useCallback, useMemo, useState } from 'react';
import { Alert, Snackbar } from '@mui/material';

import { SnackbarProviderProps } from './Snackbar.types';
import { SnackbarContext } from './SnackbarContext';
import { AlertColor } from '@mui/material/Alert/Alert';

export const SnackbarProvider = ({ children }: SnackbarProviderProps) => {
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState<AlertColor>('success');

  const showSnackbar = useCallback(
    (notification: string, status: AlertColor) => {
      setMessage(notification);
      setSeverity(status);
    },
    []
  );

  const contextValue = useMemo(
    () => ({
      showSnackbar
    }),
    [showSnackbar]
  );
  return (
    <SnackbarContext.Provider value={contextValue}>
      {children}
      <Snackbar
        open={Boolean(message)}
        autoHideDuration={6000}
        onClose={() => setMessage('')}
      >
        <Alert severity={severity}>{message}</Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};
