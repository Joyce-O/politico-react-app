import * as actions from '../actions/actionTypes';

const initialState = {
  parties: null,
  error: null,
  loading: false,
  isAuthenticated: false
};

const partyLoading = state => ({
  ...state,
  error: null,
  loading: true
});

const partySuccess = (state, action) => ({
  ...state,
  parties: action.parties,
  loading: false,
  error: null
});

const partyFail = (state, action) => ({
  ...state,
  error: action.error,
  loading: false
});

const partyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.PARTY_LOADING: return partyLoading(state, action);
    case actions.PARTY_SUCCESS: return partySuccess(state, action);
    case actions.PARTY_FAIL: return partyFail(state, action);
    default:
      return state;
  }
};

export default partyReducer;
