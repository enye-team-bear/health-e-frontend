import { takeEvery, put, fork, take } from 'redux-saga/effects';
import { SIGN_UP_USER } from './signupActionTypes';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* signupUserAsync(userData) {
	yield delay(2000);
	console.log('signup', userData);
}

export default function* root() {
	yield takeEvery(SIGN_UP_USER, signupUserAsync);
}
