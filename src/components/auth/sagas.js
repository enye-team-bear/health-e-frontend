import { takeEvery, put, fork, take } from 'redux-saga/effects';
import { AUTH_LOGOUT, AUTH_LOGOUT_USER } from './authActionTypes';
import setAuthToken from './utils/setAuthToken';

/**
 * Watches for the {@link actionTypes.AUTH_LOGOUT_USER AUTH_LOGOUT_USER} action.
 * Logs the user out of the application
 *
 * @return {void}
 */
function* logOutUser() {
	localStorage.removeItem('jwtToken');
	setAuthToken(false);
	yield put({ type: AUTH_LOGOUT });
}

export default function* root() {
	yield takeEvery(AUTH_LOGOUT_USER, logOutUser);
}
