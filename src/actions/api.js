import axios from 'axios';
// import store from '../store';

// const API_BASE_URL = 'https://politc.herokuapp.com/api/v1';
const API_BASE_URL = 'http://localhost:5700/api/v1';

// export const getToken = () => store.getState().auth.token;

export const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: getToken()
  },
});

// const setToken = (() => {
//   let cacheToken = '';
//   return (token) => {
//     if (cacheToken !== token) {
//       client.defaults.headers.Authorization = token;
//       cacheToken = token;
//     }
//   };
// })();

// store.subscribe(() => setToken(getToken()));

export const signup = params => client.post('/auth/signup', params);
// export const forgotPassword = params => client.post('/users/forgotpassword', params);
export const forgotPassword = params =>
  axios({
    method: 'patch',
    url:
      'https://ivy-ah-backend-staging.herokuapp.com/api/v1/users/forgotpassword',
    data: params,
  });
