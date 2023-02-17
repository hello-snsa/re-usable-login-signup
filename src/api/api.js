import axios from 'axios';
import store from '../store';

const api = axios.create({
  baseURL: '/api',
});

api.interceptors.request.use((config) => {
  const { accessToken } = store.getState().auth;
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default api;
