import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import forgotPassword from './forgotpassword';
import partyReducer from './partyReducer';
import candReducer from './candReducer';

const rootReducer = combineReducers({
  signupReducer,
  partyReducer,
  forgotPassword,
  candReducer

});

export default rootReducer;
