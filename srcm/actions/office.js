import * as actions from './actionTypes';
import { fetchOffice } from './api';

export const officeStart = () => ({
  type: actions.OFFICE_LOADING,
});

export const officeSuccess = candidate => ({
  type: actions.OFFICE_SUCCESS,
  candidate,
});

export const officeFail = error => ({
  type: actions.OFFICE_FAIL,
  error,
});

export const getParty = (age,
  qualification,
  office,
  party,) => (dispatch) => {
  dispatch(officeStart());
  fetchOffice({
    age,
    qualification,
    office,
    party,
  })
    .then((response) => {
      console.log(response);
      dispatch(officeSuccess(response.data));
    })
    .catch((err) => {
      console.log(err.response);
      const { error } = err.response.data.data;
      dispatch(officeFail(error));
    });
};
