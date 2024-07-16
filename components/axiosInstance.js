// axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://multiplayertv.io', // Replace with your API endpoint
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
