import { createContext } from 'react';
import { SocketContextValue } from './Socket.types';

export const SocketContext = createContext<SocketContextValue | undefined>(
  undefined
);
