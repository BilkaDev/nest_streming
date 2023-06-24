import { ReactNode } from 'react';
import { Socket } from 'socket.io-client';

export type SocketContextValue = {
  socket: Socket | undefined;
};

export type SocketProviderProps = {
  children: ReactNode;
};
