import { combineReducers } from 'redux';

import { authReducer } from './components/auth';

export default combineReducers({
	auth: authReducer,
});
