import axios from 'axios';
import store from '../store/store';

const api = axios.create({
  baseURL: 'http://localhost:3002/',
  // baseURL: 'https://myeasykart.codeyogi.io/',
});

api.interceptors.request.use((config) => {
  const { accessToken } = store.getState().authReducer;
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// axios.defaults.headers.common['Authorization'] = `Bearer ${bearerToken}`;

export default api;

//login?email=test@test.com&password=12345678