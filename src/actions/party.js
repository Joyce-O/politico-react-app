import { toast } from 'react-toastify';
import * as actions from './actionTypes';
import { createParty } from './api';

export const partyStart = () => ({
  type: actions.PARTY_LOADING,
});

export const partySuccess = party => ({
  type: actions.PARTY_SUCCESS,
  party,
});

export const partyFail = error => ({
  type: actions.PARTY_FAIL,
  error,
});

export const fetchParty = (name, acronym, hqAddress, email, phone) => (dispatch) => {
  console.log(name, acronym, hqAddress, email, phone);
  dispatch(partyStart());

  createParty({
    name, acronym, hqAddress, email, phone,
  })
    .then((response) => {
      console.log('party', response.data);
      dispatch(partySuccess(response.data));
      toast.success('Party successfully created');
    //   localStorage.setItem('token', response.data.data[0].token);
    })
    .catch((err) => {
      console.log(err.response);
      const { error } = err.response.data.data;
      dispatch(partyFail(error));
    });
};
