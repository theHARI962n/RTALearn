import axios from "axios";

// Adjust baseURL if backend runs elsewhere
const api = axios.create({
  baseURL: "http://localhost:5005/api",
});

// Attach JWT to every request automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
