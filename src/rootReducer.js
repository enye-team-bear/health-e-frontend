import { combineReducers } from 'redux';

import { authReducer } from './components/auth';
import { signinReducer } from './components/signin';
import { signupReducer } from './components/signup';

export default combineReducers({
	auth: authReducer,
	signin: signinReducer,
	signup: signupReducer,
});
