import { takeEvery, put, fork, take } from 'redux-saga/effects';
import {
	AUTH_LOGOUT,
	AUTH_LOGOUT_USER,
	GET_USER_DATA,
} from './authActionTypes';
import { setUserData, clearLoading } from './actions';
import { getUserDetails } from './services';
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

function* getUserData() {
	try {
		const res = yield getUserDetails();
		if (res.data.status === 'success') {
			yield put(setUserData(res.data.data));
			yield put(clearLoading());
		}
	} catch (err) {
		console.log(err);
	}
}

export default function* root() {
	yield takeEvery(AUTH_LOGOUT_USER, logOutUser);
	yield takeEvery(GET_USER_DATA, getUserData);
}
