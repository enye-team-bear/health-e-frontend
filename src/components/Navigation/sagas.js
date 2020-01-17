/* eslint-disable max-lines-per-function */
import { firebaseNotifications } from '../../firebaseConfig';

import { takeEvery, put, fork, take, select } from 'redux-saga/effects';
import { eventChannel as EventChannel } from 'redux-saga';
import { refreshNotifications } from './actions';
import { getUserData } from '../auth/actions';

function* startListener() {
	const channel = new EventChannel(emiter => {
		const listener = firebaseNotifications.onSnapshot(snapshot => {
			emiter({ data: snapshot.docs || {} });
		});

		return () => {
			listener.off();
		};
	});

	while (true) {
		const { data } = yield take(channel);
		const newData = data.map((el, i) => ({
			...el.data(),
			notificationId: el.id,
		}));
		yield put(getUserData());
		const state = yield select();
		const userName = state.auth.userData.userName;
		const filteredNotification = newData.filter(
			el => userName !== el.sender,
		);
		const sortNotification = filteredNotification.sort((a, b) =>
			a.createdAt > b.createdAt ? -1 : 1,
		);

		// console.log(sortNotification);

		yield put(refreshNotifications(sortNotification));
	}
}

export default function* root() {
	yield fork(startListener);
}
