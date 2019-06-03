import * as actions from './actionTypes';
import { signup, login } from './api';

export const signupStart = () => ({
  type: actions.AUTH_LOADING,
});

export const signupSuccess = token => ({
  type: actions.AUTH_SUCCESS,
  token,
});

export const signupFail = error => ({
  type: actions.AUTH_FAIL,
  error,
});

export const fetchSignup = (firstname,
  lastname,
  email, phone,
  address, password) => (dispatch) => {
  dispatch(signupStart());

  signup({
    firstname, lastname, email, phone, address, password,
  })
    .then((response) => {
      dispatch(signupSuccess(response.data.data[0].token));
      localStorage.setItem('token', response.data.data[0].token);
    })
    .catch((err) => {
      const { error } = err.response.data.data;
      dispatch(signupFail(error));
    });
};


export const loginStart = () => ({
  type: actions.LOGIN_LOADING,
});

export const loginSuccess = token => ({
  type: actions.LOGIN_SUCCESS,
  token,
});

export const loginFail = error => ({
  type: actions.LOGIN_FAIL,
  error,
});

export const fetchLogin = (email, password,) => (dispatch) => {
  dispatch(loginStart());

  login({ email, password, })
    .then((response) => {
      dispatch(loginSuccess(response.data.data[0].token));
      localStorage.setItem('token', response.data.data[0].token);
    })
    .catch((err) => {
      console.log(err.response);
      const { error } = err.response.data.data;
      dispatch(loginFail(error));
    });
};
