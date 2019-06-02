import * as actions from './actionTypes';
import { createOffice } from './api';

export const officeStart = () => ({
  type: actions.OFFICE_LOADING,
});

export const officeSuccess = office => ({
  type: actions.OFFICE_SUCCESS,
  office,
});

export const officeFail = error => ({
  type: actions.OFFICE_FAIL,
  error,
});

export const fetchOffice = (name, ageLimit, basicQual, type,) => (dispatch) => {
  console.log(' name', name, ' age', ageLimit, ' qual', basicQual, 'le type', type,);
  dispatch(officeStart());

  createOffice({
    name, ageLimit, basicQual, type,
  })
    .then((response) => {
      console.log('office', response.data);
      dispatch(officeSuccess(response.data));
    //   localStorage.setItem('token', response.data.data[0].token);
    })
    .catch((err) => {
      console.log(err.response);
      const { error } = err.response.data.data;
      dispatch(officeFail(error));
    });
};
