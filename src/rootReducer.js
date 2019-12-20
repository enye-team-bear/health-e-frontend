import { combineReducers } from 'redux';

import { authReducer } from './components/auth';
import { signinReducer } from './components/signin';
import { signupReducer } from './components/signup';
import { reducer as postReducer } from './components/feed';

export default combineReducers({
	auth: authReducer,
	signin: signinReducer,
	signup: signupReducer,
	post: postReducer,
});
