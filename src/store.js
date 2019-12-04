import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import { signupSaga } from './components/signup';

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	initialState,
	composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(signupSaga);

export default store;
