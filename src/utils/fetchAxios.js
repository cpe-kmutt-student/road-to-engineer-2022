import axios from "axios";

const fetch = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

fetch.interceptors.request.use(config => {
  config.headers['access-token'] = localStorage.getItem("user");
  return config;
});

export default fetch;
