import axios from 'axios';

// Next we make an 'instance' of it

export const axiosConfig = axios.create({
  // .. where we make our configurations
  baseURL: process.env.REACT_APP_API_URL,
});

export const setAxiosAuthToken = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  if (typeof token !== 'undefined' && token) {
    axios.defaults.headers.common['x-access-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-access-token'];
  }
};
