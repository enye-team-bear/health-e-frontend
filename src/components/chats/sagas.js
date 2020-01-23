/* eslint-disable camelcase */
/* eslint-disable max-lines-per-function */
import { eventChannel as EventChannel } from 'redux-saga';
import { takeEvery, put, fork, take, select } from 'redux-saga/effects';
import { firebaseRooms, firebaseUsers } from '../../firebaseConfig';

// import { READ_NOTIFICATION } from './actionTypes';
import { refreshRooms } from './actions';
// import { getUserData } from '../auth/actions';
// import { readNot } from './services';

// }

const formatData = async (data, state) => {
	const { user_id } = state.auth.user;
	const userRooms = data.filter(el => {
		if (user_id === el.participant1 || user_id === el.participant2)
			return el;
	});

	const promises = userRooms.map(async (el, i) => {
		const attributes = [];
		try {
			const snapshot = await firebaseUsers
				.where('userId', 'in', [el.participant1, el.participant2])
				.get();

			snapshot.forEach(doc => {
				attributes.push({
					...doc.data(),
					userId: doc.id,
				});
			});
		} catch (err) {
			console.log('Error getting documents', err);
		}
		return { ...el, attributes };
	});

	const userChats = await Promise.all(promises);

	return userChats;
};

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
	// yield takeEvery(READ_NOTIFICATION, readNotification);
	yield fork(roomListener);
}
