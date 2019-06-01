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

export const signup = params => client.post('/auth/signup', params);
export const fetchCandidate = params => client.post(`/office/${tokenn.payload.id}/register`, params);
export const fetchOffices = () => client.get('/office');
export const forgotPassword = params => axios({
  method: 'patch',
  url:
      'https://ivy-ah-backend-staging.herokuapp.com/api/v1/users/forgotpassword',
  data: params,
});

export const fetchParty = params => axios({
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    Authorization: getToken()
  },
  url:
      'https://ivy-ah-backend-staging.herokuapp.com/api/v1/parties',
  data: params,
});

console.log('my token', tokenn.payload.id);
export const fetchOffice = params => axios({
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    Authorization: getToken()
  },
  url:
      `https://ivy-ah-backend-staging.herokuapp.com/api/v1//office/${tokenn.payload.id}/register`,
  data: params,
});

// export const fetchOffices = params => axios({
//   method: 'get',
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: getToken()
//   },
//   url:
//       `https://ivy-ah-backend-staging.herokuapp.com/api/v1//office/${tokenn.payload.id}/register`,
//   data: params,
// });
