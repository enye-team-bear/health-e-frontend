/* eslint-disable camelcase */
/* eslint-disable max-lines-per-function */
import { eventChannel as EventChannel } from 'redux-saga';
import { takeEvery, put, fork, take, select } from 'redux-saga/effects';
import { firebaseRooms } from '../../firebaseConfig';

import { refreshRooms, getUsersSuccess } from './actions';
import { SEND_MESSAGE, GET_USERS } from './actionTypes';
import { formatData, sendMessage as sendMsg, getAllUsers } from './services';

function* getUsers() {
	try {
		const res = yield getAllUsers();
		if (res.data.status === 'success') {
			yield put(getUsersSuccess(res.data.data));
		}
	} catch (err) {
		console.log(err);
	}
}

function* sendMessage(data) {
	const { msg, recieverId } = data.payload;
	try {
		yield sendMsg(msg, recieverId);
	} catch (err) {
		console.log(err);
	}
}

function* roomListener() {
	const channel = new EventChannel(emiter => {
		const listener = firebaseRooms.onSnapshot(snapshot => {
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
			roomId: el.id,
		}));
		const state = yield select();
		const chatData = yield formatData(newData, state);
		yield put(refreshRooms(chatData));
	}
}

export default function* root() {
	yield takeEvery(GET_USERS, getUsers);
	yield takeEvery(SEND_MESSAGE, sendMessage);
	yield fork(roomListener);
}
