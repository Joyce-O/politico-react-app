import * as actions from '../actions/actionTypes';

const initialState = {
  token: null,
  error: null,
  loading: false,
  isAuthenticated: false
};

const authLoading = state => ({
  ...state,
  error: null,
  loading: true
});

const signupSuccess = (state, action) => ({
  ...state,
  token: action.token,
  loading: false,
  error: null
});

const signupFail = (state, action) => ({
  ...state,
  error: action.error,
  loading: false
});

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTH_LOADING: return authLoading(state, action);
    case actions.AUTH_SUCCESS: return signupSuccess(state, action);
    case actions.AUTH_FAIL: return signupFail(state, action);
    default:
      return state;
  }
};

export default signupReducer;
