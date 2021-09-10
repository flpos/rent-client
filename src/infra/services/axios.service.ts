import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? process.env.REACT_APP_API
      : '/backend/',
});

export default axiosInstance;
