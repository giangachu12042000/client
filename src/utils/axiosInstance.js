import axios from 'axios';
import { apiEndPoint } from './constants'
// import Auth from '../auth/Auth'


const axiosInstance = axios.create({
  baseURL: `${apiEndPoint}`,
  timeout: 50000,
});

axiosInstance.interceptors.request.use(
    (config) => {
      // const token = Auth.getToken();

      // if (token) {
      //   config.headers.authorization = `Bearer ${token}`; // eslint-disable-line
      // }
      return config;
    },
  (error) => Promise.reject(error)
);

export default axiosInstance;
