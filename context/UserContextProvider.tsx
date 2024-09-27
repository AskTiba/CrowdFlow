import React, { useState, ReactNode } from 'react';
import UserContext from './UserContext'; // Import the context
import { User, UserContextProviderProps } from '~/types';

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);  // Use shared User type

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
