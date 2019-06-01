import * as actions from '../actions/actionTypes';

const initialState = {
  token: null,
  error: null,
  loading: false,
  isAuthenticated: false
};

const loginLoading = state => ({
  ...state,
  error: null,
  loading: true
});

const loginSuccess = (state, action) => ({
  ...state,
  token: action.token,
  loading: false,
  error: null
});

const loginFail = (state, action) => ({
  ...state,
  error: action.error,
  loading: false
});

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_LOADING: return loginLoading(state, action);
    case actions.LOGIN_SUCCESS: return loginSuccess(state, action);
    case actions.LOGIN_FAIL: return loginFail(state, action);
    default:
      return state;
  }
};

export default loginReducer;
