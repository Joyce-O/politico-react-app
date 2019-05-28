import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import forgotPassword from './forgotpassword';

const rootReducer = combineReducers({
  signupReducer,
  forgotPassword

});

export default rootReducer;
