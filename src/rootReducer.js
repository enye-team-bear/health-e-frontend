import { combineReducers } from 'redux';

import { authReducer } from './components/auth';
import { signinReducer } from './components/signin';
import { signupReducer } from './components/signup';
import { reducer as postReducer } from './components/feed';
import { reducer as topicReducer } from './components/topics';
import { reducer as profileReducer } from './components/profile';
import { reducer as notificationReducer } from './components/Navigation';
import { reducer as chatReducer } from './components/chats';

export default combineReducers({
	auth: authReducer,
	signin: signinReducer,
	signup: signupReducer,
	post: postReducer,
	topic: topicReducer,
	profile: profileReducer,
	notification: notificationReducer,
	chat: chatReducer,
});
