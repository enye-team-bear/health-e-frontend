/* eslint-disable max-lines-per-function */
import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import { DATABASE_API_URL } from './constants';
import { SIGN_IN_USER, UPDATE_SIGN_IN_STATUS } from './signinActionTypes';
import { AUTH_USER } from '../auth/authActionTypes';
import setAuthData from '../auth/utils/setAuthData';

/**
 * Watches for the {@link actionTypes.SIGN_IN_USER SIGN_IN_USER} action.
 * Gets the requested data from the server.
 *
 * @return {void}
 */
function* signinUserAsync(userData) {
	try {
		// yield put({ type: SIGN_IN_LOADING });
		const res = yield axios.post(
			`${DATABASE_API_URL}/login`,
			userData.payload,
		);
		const { data } = res.data;
		if (res.data) {
			const decoded = setAuthData(data);
			yield put({ type: UPDATE_SIGN_IN_STATUS, payload: {} });
			yield put({ type: AUTH_USER, payload: decoded });
			window.location.href = '/';
		} else {
			yield put({
				type: UPDATE_SIGN_IN_STATUS,
				payload: 'something went wrong',
			});
		}
	} catch (err) {
		yield put({
			type: UPDATE_SIGN_IN_STATUS,
			payload: 'Something went wrong',
		});
	}
}

export default function* root() {
	yield takeEvery(SIGN_IN_USER, signinUserAsync);
}
