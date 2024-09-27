import React, { createContext } from 'react';
import { UserContextType } from '~/types';

// Create the context with undefined as the initial value
const UserContext = createContext<UserContextType | undefined>(undefined);

export default UserContext;
