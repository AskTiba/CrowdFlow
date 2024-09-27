import { ReactNode } from "react";

// Define and export the User type
export type User = {
    fideID: string;  // Always an 8-digit number stored as a string
    club?: string;
    
};
  
// Define the UserContextType and export it
export interface UserContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}
  
export interface UserContextProviderProps {
    children: ReactNode;
}