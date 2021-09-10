import axios from 'axios';

// Next we make an 'instance' of it
export const axiosConfig = axios.create({
  // .. where we make our configurations
  baseURL: 'http://localhost:8080/api/',
});

export const setAxiosAuthToken = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  console.log(token);
  if (typeof token !== 'undefined' && token) {
    axiosConfig.defaults.headers.common['x-access-token'] = token;
  } else {
    delete axiosConfig.defaults.headers.common['x-access-token'];
  }
};
