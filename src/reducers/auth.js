import { persistReducer } from 'redux-persist';
import { decode } from 'jsonwebtoken';
import storage from 'redux-persist/lib/storage';
import * as actions from '../actions/actionTypes';

const authPersistConfig = {
  key: 'auth',
  storage
};

const initialState = {
  token: '',
  userId: null,
  email: null,
  error: null,
  shouldRedirect: false,
  user: {},
};

const authLoading = state => ({
  ...state,
  loading: true
});

const authSuccess = (state, action) => ({
  ...state,
  token: action.token,
  userId: action.userId,
  email: action.email,
  loading: false,
  error: null,
  user: decode(action.token) || {}
});

const authFail = (state, action) => ({
  ...state,
  error: action.error,
  loading: false
});

const signOut = () => initialState;

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTH_LOADING: return authLoading(state, action);
    case actions.AUTH_SUCCESS: return authSuccess(state, action);
    case actions.AUTH_FAIL: return authFail(state, action);
    case actions.SIGN_OUT: return signOut();
    default:
      return state;
  }
};

export default persistReducer(authPersistConfig, AuthReducer);
