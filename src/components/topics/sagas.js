/* eslint-disable max-lines-per-function */
import { firebaseTopics } from '../../firebaseConfig';
import { store } from 'react-notifications-component';

import { takeEvery, put, fork, take } from 'redux-saga/effects';
import { eventChannel as EventChannel } from 'redux-saga';
import {
	NEW_TOPIC,
	GET_TOPIC,
	LIKE_TOPIC,
	LIKE_SINGLE_TOPIC,
	COMMENT_TOPIC,
} from './actionTypes';
import {
	newTopic,
	newTopicSuccess,
	newTopicFailed,
	refreshTopics,
	getTopicSuccess,
	getTopicFailed,
	likeTopicSuccess,
} from './actions';
import { notificationsSettings } from './constants';
import {
	createNewTopic,
	getTopic as getCurrentTopic,
	likeTopic as newLike,
	commentTopic as addComment,
} from './services';

function* topicNew(postData) {
	try {
		const res = yield createNewTopic(postData.payload.data);
		if (res.data.status === 'success') {
			yield put(newTopicSuccess(res.data.data));
			postData.payload.close();
			const notification = notificationsSettings;
			notification.title = 'Success';
			notification.message = 'Topic created successfully';
			notification.type = 'success';
			store.addNotification(notification);
		} else {
			yield put(newTopicFailed({}));
		}
	} catch (err) {
		yield put(newTopicFailed(err.response.data.message));
	}
}

function* getTopic(data) {
	try {
		const res = yield getCurrentTopic(data.payload);
		if (res.data.status === 'success') {
			yield put(getTopicSuccess(res.data.data));
		}
	} catch (err) {
		yield put(getTopicFailed(err.response.data.message));
	}
}

function* likeTopic(data) {
	try {
		const res = yield newLike(data.payload);
		if (res.data.status === 'success') {
			console.log(res.data.data);
		}
	} catch (err) {
		console.log(err);
	}
}

function* likeSingleTopic(data) {
	try {
		const res = yield newLike(data.payload);
		if (res.data.status === 'success') {
			yield put(likeTopicSuccess(res.data.data));
		}
	} catch (err) {
		console.log(err);
	}
}

function* commentTopic(data) {
	try {
		const response = yield addComment(data.payload);
		if (response.data.status === 'success') {
			const res = yield getCurrentTopic(data.payload.id);
			yield put(getTopicSuccess(res.data.data));
		}
	} catch (err) {
		console.log(err);
	}
}

function* startListener() {
	const channel = new EventChannel(emiter => {
		const listener = firebaseTopics.onSnapshot(snapshot => {
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
			topicId: el.id,
		}));
		yield put(refreshTopics(newData));
	}
}

export default function* root() {
	yield takeEvery(NEW_TOPIC, topicNew);
	yield takeEvery(GET_TOPIC, getTopic);
	yield takeEvery(LIKE_TOPIC, likeTopic);
	yield takeEvery(LIKE_SINGLE_TOPIC, likeSingleTopic);
	yield takeEvery(COMMENT_TOPIC, commentTopic);
	yield fork(startListener);
}
