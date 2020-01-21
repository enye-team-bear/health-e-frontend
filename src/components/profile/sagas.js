/* eslint-disable max-lines-per-function */
import { takeEvery, put, call } from 'redux-saga/effects';
import { store } from 'react-notifications-component';

import { GET_USER_PROFILE, UPDATE_USER } from './actionTypes';
import {
	getUserProfileSuccess,
	getUserProfileFail,
	updateUserProfileSuccess,
} from './actions';
import { notificationsSettings } from './constants';
import { getCurrentUserProfile, updateCurrentUserProfile } from './services';

function* getCurrentUser() {
	try {
		const res = yield call(getCurrentUserProfile);
		if (res.data.status === 'success') {
			yield put(getUserProfileSuccess(res.data.data));
		} else {
			yield put(getUserProfileFail('Something went wrong'));
		}
	} catch (err) {
		yield put(getUserProfileFail(err.response.data.message));
	}
}

function* updateCurrentUser(userData) {
	try {
		const newUpdate = userData.payload.data;
		const res = yield updateCurrentUserProfile(newUpdate);
		const { data, status } = res.data;
		if (status === 'success') {
			yield put(updateUserProfileSuccess(newUpdate));
			userData.payload.close();
			const notification = notificationsSettings;
			notification.title = 'Success';
			notification.message = 'Profile updated successfully';
			notification.type = 'success';
			store.addNotification(notification);
		}
	} catch (err) {
		console.log(err);
	}
}

export default function* root() {
	yield takeEvery(GET_USER_PROFILE, getCurrentUser);
	yield takeEvery(UPDATE_USER, updateCurrentUser);
}
