import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { takeEvery, put, fork, take } from 'redux-saga/effects';
import { DATABASE_API_URL } from './constants';
import {
	SIGN_IN_USER,
	SIGN_IN_LOADING,
	SIGN_IN_NOT_LOADING,
} from './signinActionTypes';
import setAuthToken from '../auth/utils/setAuthToken';

function* signinUserAsync(userData) {
	try {
		yield put({ type: SIGN_IN_LOADING });
		const res = yield axios.post(
			`${DATABASE_API_URL}/login`,
			userData.payload
		);
		const { data } = res.data;
		localStorage.setItem('jwtToken', data);
		setAuthToken(data);
		const decoded = jwtDecode(data);
		yield put({ type: SIGN_IN_NOT_LOADING });
		userData.history.push('/');
	} catch (err) {
		yield put({ type: SIGN_IN_NOT_LOADING });
	}
}

export default function* root() {
	yield takeEvery(SIGN_IN_USER, signinUserAsync);
}
