import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    const response = await api.get("/profile", {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  },

  signin: async (username: string, password: string) => {
    const response = await api.post("/login", {
      username: username,
      password: password,
    });

   

    return response.data;
  },

  logout: async () => {
    const response = await api.post("/logout");
    return response.data;
  },
});
