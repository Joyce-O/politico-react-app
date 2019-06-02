import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';
import partyReducer from './partyReducer';
import officeReducer from './officeReducer';

const rootReducer = combineReducers({
  signupReducer,
  loginReducer,
  partyReducer,
  officeReducer

});

export default rootReducer;
