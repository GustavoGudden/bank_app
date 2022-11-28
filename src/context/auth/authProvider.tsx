import { Children, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../Hooks/userApi";
import { User } from "../../types/user";
import { AuthContext } from "./authContext";

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);

  const api = useApi();

  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem("authToken");
      if (storageData) {
        const data = await api.validateToken(storageData);

        if (data.user) {
          setUser(data.user);
        }
      }
    };
    validateToken();
  }, [api]);

  const signin = async (username: string, password: string) => {
    const data = await api.signin(username, password);

    if (data.user && data.token) {
      setUser(data.user);
      setToken(data.token);

      return true;
    }
    return false;
  };

  const singout = async () => {
    setUser(null);
    setToken("");
  };

  const setToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  return (
    <AuthContext.Provider value={{ user, signin, singout }}>
      {children}
    </AuthContext.Provider>
  );
};
