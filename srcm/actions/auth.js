import * as actions from './actionTypes';
import { signup, forgotPassword } from './api';

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
  const authData = {
    firstname,
    lastname,
    email,
  };

  signup({
    firstname, lastname, email, phone, address, password,
  })
    .then((response) => {
      dispatch(signupSuccess(response.data.data[0].token));
      localStorage.setItem('token', response.data.data[0].token);
    })
    .catch((err) => {
      console.log(err.response);
      const { error } = err.response.data.data;
      dispatch(signupFail(error));
    });
};

export const passwordStart = () => ({
  type: actions.PASSWORD_LOADING,
});

export const sendResetLinkSuccess = passwordResetToken => ({
  type: actions.PASSWORD_SUCCESS,
  passwordResetToken,
});

export const sendResetLinkFail = error => ({
  type: actions.PASSWORD_FAIL,
  error,
});

export const sendLink = email => (dispatch) => {
  dispatch(passwordStart());
  const url = 'https://ivy-ah-frontend.herokuapp.com/resetPassword';
  forgotPassword({ email, url })
    .then((response) => {
      dispatch(sendResetLinkSuccess(response.data.passwordResetToken));
    })
    .catch((err) => {
      const { error } = err.response.data;
      dispatch(sendResetLinkFail(error));
    });
};
