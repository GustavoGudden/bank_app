import { createContext } from "react";
import { User } from "../../types/user";

export type AuthContextType = {
  user: User | null;
  signin: (username: string, password: string) => Promise<Boolean>;
  singout: () => void;
};

export const AuthContext = createContext<AuthContextType>(null!);
