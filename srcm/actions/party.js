import * as actions from './actionTypes';
import { fetchParty } from './api';

export const partyStart = () => ({
  type: actions.PARTY_LOADING,
});

export const partySuccess = token => ({
  type: actions.PARTY_SUCCESS,
  token,
});

export const partyFail = error => ({
  type: actions.PARTY_FAIL,
  error,
});

export const getParty = (name,
  acronym,
  hqAddress,
  email,
  phone,) => (dispatch) => {
  dispatch(partyStart());
  fetchParty({
    name,
    acronym,
    hqAddress,
    email,
    phone,
  })
    .then((response) => {
      console.log(response);
      dispatch(partySuccess(response.data));
    })
    .catch((err) => {
      console.log(err.response);
      const { error } = err.response.data.data;
      dispatch(partyFail(error));
    });
};
