import { useEffect, useMemo, useState } from 'react';
import { io, Socket } from 'socket.io-client';

import { SocketProviderProps } from './Socket.types';
import { SocketContext } from './SocketContext';

export const SocketProvider = ({ children }: SocketProviderProps) => {
  const [socket, setSocket] = useState<Socket>();

  const URL = `${process.env.REACT_APP_API_URL}/streamer`;

  useEffect(() => {
    const newSocket = io(URL, { autoConnect: false });
    setSocket(newSocket);
  }, []);

  const contextValue = useMemo(
    () => ({
      socket
    }),
    [socket]
  );

  return (
    <SocketContext.Provider value={contextValue}>
      {children}
    </SocketContext.Provider>
  );
};
