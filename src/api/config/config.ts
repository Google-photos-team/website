import axios from "axios";

export const myAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const addTokenToTheAxios = (token: string) => {
  myAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
