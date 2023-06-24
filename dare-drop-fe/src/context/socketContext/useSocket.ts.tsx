import { useContext } from 'react';
import { SocketContext } from './SocketContext';

export const useSocket = () => {
  const ctx = useContext(SocketContext);
  if (!ctx) throw new Error('useSocket can only be used inside SocketProvider');
  return ctx;
};
