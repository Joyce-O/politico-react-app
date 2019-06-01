import axios from 'axios';
import jwt from 'jsonwebtoken';

// const API_BASE_URL = 'https://politc.herokuapp.com/api/v1';
const API_BASE_URL = 'http://localhost:5700/api/v1';
export const decodeToken = token => jwt.decode(token);
export const getToken = () => localStorage.getItem('token');

export const setToken = (token) => {
  localStorage.setItem('token', token);
  return getToken();
};

export const removeToken = () => localStorage.removeItem('token');

export const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: getToken()
  },
});
const tokenn = decodeToken(getToken());
console.log(tokenn);

export const signup = params => client.post('/auth/signup', params);
export const login = params => client.post('/auth/login', params);
