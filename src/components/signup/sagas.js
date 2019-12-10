import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import { DATABASE_API_URL } from './constants';
import {
	SIGN_UP_USER,
	SIGN_UP_LOADING,
	SIGN_UP_NOT_LOADING,
} from './signupActionTypes';
import { AUTH_USER } from '../auth/authActionTypes';
import setAuthData from '../auth/utils/setAuthData';

/**
 * Watches for the {@link actionTypes.SIGN_UP_USER SIGN_UP_USER} action.
 * Gets the requested data from the server.
 *
 * @return {void}
 */

function* signupUserAsync(userData) {
	try {
		yield put({ type: SIGN_UP_LOADING });
		const res = yield axios.post(
			`${DATABASE_API_URL}/signup`,
			userData.payload
		);
		const { data } = res.data;
		const decoded = setAuthData(data);
		yield put({ type: SIGN_UP_NOT_LOADING, payload: {} });
		yield put({ type: AUTH_USER, payload: decoded });
		userData.history.push('/');
	} catch (err) {
		yield put({
			type: SIGN_UP_NOT_LOADING,
			payload: err.response.data.message,
		});
	}
}

export default function* root() {
	yield takeEvery(SIGN_UP_USER, signupUserAsync);
}
