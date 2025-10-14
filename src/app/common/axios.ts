import axios from 'axios';
import { baseURL } from '../config/config';

//import {Modal} from 'antd';

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 300000,
});

axiosInstance.interceptors.request.use((config) => {
  if (config.headers !== undefined) {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (response) {
      //perform the manipulation here and change the response object
    }
    return response.data;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
       
      }
      return Promise.reject(error.response.data);
    }
    if (error.code === 'ERR_NETWORK') {
      error.message = 'Network Error , Please check your internet connection.';
      return Promise.reject(error);
    }
    if (error.code === 'ECONNABORTED') {
      error.message = 'Request time out.';
      return Promise.reject(error);
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
