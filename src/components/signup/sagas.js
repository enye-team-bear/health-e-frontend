/* eslint-disable max-lines-per-function */
import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import { DATABASE_API_URL } from './constants';
import { SIGN_UP_USER, UPDATE_SIGN_UP_STATUS } from './signupActionTypes';
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
		const res = yield axios.post(
			`${DATABASE_API_URL}/signup`,
			userData.payload,
		);
		const { data } = res.data;
		const decoded = setAuthData(data);
		yield put({ type: UPDATE_SIGN_UP_STATUS, payload: {} });
		yield put({ type: AUTH_USER, payload: decoded });
		window.location.href = '/';
	} catch (err) {
		const error = err.response
			? err.response.data.message
			: 'Something went wrong';
		yield put({
			type: UPDATE_SIGN_UP_STATUS,
			payload: error,
		});
	}
}

export default function* root() {
	yield takeEvery(SIGN_UP_USER, signupUserAsync);
}
