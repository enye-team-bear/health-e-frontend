/* eslint-disable max-lines-per-function */
import { takeEvery, put } from 'redux-saga/effects';
import { store } from 'react-notifications-component';

import {
	NEW_POST,
	GET_ALL_POSTS,
} from './actionTypes';
import {
	newPostNotLoading,
	setAllPosts,
	getAllPosts as getNewPosts,
	getAllPostsFailed,
} from './actions';
import { notificationsSettings } from './constants';
import {
	createPost,
	getPosts,
} from './services';

/**
 * Watches for the {@link actionTypes.SIGN_UP_USER SIGN_UP_USER} action.
 * Gets the requested data from the server.
 *
 * @return {void}
 */

function* createNewPost(postData) {
	try {
		const res = yield createPost(postData.payload);
		if (res.data.status === 'success') {
			yield put(newPostNotLoading());
			yield put(getNewPosts());
			const notification = notificationsSettings;
			notification.title = 'Success';
			notification.message = 'Post created successfully';
			notification.type = 'success';
			store.addNotification(notification);
		}
	} catch (err) {
		const notification = notificationsSettings;
		notification.title = 'Error';
		notification.message = 'Unable to make post';
		notification.type = 'danger';
		store.addNotification(notification);
	}
}

function* getAllPosts() {
	try {
		const res = yield getPosts();
		if (res.data.status === 'success') {
			yield put(setAllPosts(res.data.data));
		}
	} catch (err) {
		yield put(getAllPostsFailed('Unable to load posts'));
	}
}



export default function* root() {
	yield takeEvery(NEW_POST, createNewPost);
	yield takeEvery(GET_ALL_POSTS, getAllPosts);
}
