import * as actions from '../actions/actionTypes';

const initialState = {
  candidate: null,
  error: null,
  loading: false,
  isAuthenticated: false
};

const candLoading = state => ({
  ...state,
  error: null,
  loading: true
});

const candSuccess = (state, action) => ({
  ...state,
  candidate: action.candidate,
  loading: false,
  error: null
});

const candFail = (state, action) => ({
  ...state,
  error: action.error,
  loading: false
});

const candReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CANDIDATE_LOADING: return candLoading(state, action);
    case actions.CANDIDATE_SUCCESS: return candSuccess(state, action);
    case actions.CANDIDATE_FAIL: return candFail(state, action);
    default:
      return state;
  }
};

export default candReducer;
