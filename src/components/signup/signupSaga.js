import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { DATABASE_API_URL } from './constants';
import {
	SIGN_UP_USER,
	SIGN_UP_LOADING,
	SIGN_UP_NOT_LOADING,
} from './signupActionTypes';
import { takeEvery, put, fork, take } from 'redux-saga/effects';
import setAuthToken from '../auth/utils/setAuthToken';

function* signupUserAsync(userData) {
	try {
		yield put({ type: SIGN_UP_LOADING });
		const res = yield axios.post(
			`${DATABASE_API_URL}/signup`,
			userData.payload
		);
		const { data } = res.data;
		localStorage.setItem('jwtToken', data);
		setAuthToken(data);
		const decoded = jwtDecode(data);
		yield put({ type: SIGN_UP_NOT_LOADING });
		userData.history.push('/');
	} catch (err) {
		yield put({ type: SIGN_UP_NOT_LOADING });
	}
}

export default function* root() {
	yield takeEvery(SIGN_UP_USER, signupUserAsync);
}
