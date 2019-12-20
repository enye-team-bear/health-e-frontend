import { store } from 'react-notifications-component';
import { takeEvery, put } from 'redux-saga/effects';
import { NEW_POST, GET_ALL_POSTS, LIKE_POST } from './actionTypes';
import {
	newPostNotLoading,
	setAllPosts,
	setLikePost,
	getAllPosts as getNewPosts,
} from './actions';
import { createPost, getPosts, postLike } from './services';

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
		}
	} catch (err) {
		console.log(err);
	}
}

function* getAllPosts() {
	try {
		const res = yield getPosts();
		if (res.data.status === 'success') {
			yield put(setAllPosts(res.data.data));
		}
	} catch (err) {
		console.log(err);
	}
}

function* likePost(data) {
	try {
		const res = yield postLike(data.payload);
		if (res.data.status === 'success') {
			yield put(setLikePost(res.data.data));
		}
	} catch (err) {
		console.log(err);
	}
}

export default function* root() {
	yield takeEvery(NEW_POST, createNewPost);
	yield takeEvery(GET_ALL_POSTS, getAllPosts);
	yield takeEvery(LIKE_POST, likePost);
}
