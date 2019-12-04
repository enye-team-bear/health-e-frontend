import { takeEvery, put, fork, take } from 'redux-saga/effects';
import { SIGN_IN_USER } from './signinActionTypes';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* signinUserAsync(userData) {
	yield delay(2000);
	console.log('signin', userData);
}

export default function* root() {
	yield takeEvery(SIGN_IN_USER, signinUserAsync);
}
