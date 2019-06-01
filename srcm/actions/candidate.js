import * as actions from './actionTypes';
import { fetchCandidate } from './api';

export const candStart = () => ({
  type: actions.CANDIDATE_LOADING,
});

export const candSuccess = candidate => ({
  type: actions.CANDIDATE_SUCCESS,
  candidate,
});

export const candFail = error => ({
  type: actions.CANDIDATE_FAIL,
  error,
});

export const postCandidate = (age,
  qualification,
  office,
  party,) => (dispatch) => {
  console.log('reached actions', age,
    qualification,
    office,
    party,);
  dispatch(candStart());
  fetchCandidate({
    age,
    qualification,
    office,
    party,
  })
    .then((response) => {
      console.log(response);
      dispatch(candSuccess(response.data));
    })
    .catch((err) => {
      console.log(err.response);
      const { error } = err.response.data.data;
      dispatch(candFail(err));
    });
};
