import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import { sagas as signupSaga } from './components/signup';
import { sagas as signinSaga } from './components/signin';
import { sagas as authSaga } from './components/auth';
import { sagas as feedSaga } from './components/feed';
import { sagas as topicSaga } from './components/topics';
import { sagas as profileSaga } from './components/profile';

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	initialState,
	composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(signinSaga);
sagaMiddleware.run(signupSaga);
sagaMiddleware.run(authSaga);
sagaMiddleware.run(feedSaga);
sagaMiddleware.run(topicSaga);
sagaMiddleware.run(profileSaga);

export default store;
