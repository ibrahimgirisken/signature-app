import axios from "axios";

export const http = axios.create({
  baseURL: 'https://api.cw-dig.com/api',
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("Oturum süresi dolmuş!");
    }
    return Promise.reject(error);
  },
);
