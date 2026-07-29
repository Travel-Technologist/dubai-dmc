// src/config/api.ts

const isDevelopment = import.meta.env.DEV;

export const API_URL = isDevelopment
  ? "http://localhost:5000"
  : import.meta.env.VITE_API_URL;