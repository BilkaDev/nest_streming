import axiosSource from 'axios';

export const axios = axiosSource.create({
  headers: {
    'Content-type': 'application/json'
  },
  baseURL: process.env.REACT_APP_API_URL
});
