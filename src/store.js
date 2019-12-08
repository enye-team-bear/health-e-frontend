import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import { sagas as signupSaga } from './components/signup';
import { sagas as signinSaga } from './components/signin';
import { sagas as authSaga } from './components/auth';

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	initialState,
	composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(signinSaga);
sagaMiddleware.run(signupSaga);
sagaMiddleware.run(authSaga);

export default store;
