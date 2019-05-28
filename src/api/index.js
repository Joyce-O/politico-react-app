import axios from 'axios';
import store from '../store';

const API_BASE_URL = 'https://politc.herokuapp.com//api/v1';

export const getToken = () => store.getState().auth.token;

export const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: getToken()
  },
});

const setToken = (() => {
  let cacheToken = '';
  return (token) => {
    if (cacheToken !== token) {
      client.defaults.headers.Authorization = token;
      cacheToken = token;
    }
  };
})();

store.subscribe(() => setToken(getToken()));

export const signup = params => client.post('/auth/signup', params);
export const login = params => client.post('/auth/login', params);
