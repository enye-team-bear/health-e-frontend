/* eslint-disable max-lines-per-function */
import { takeEvery, put } from 'redux-saga/effects';
import { store } from 'react-notifications-component';

import {
	NEW_POST,
	GET_ALL_POSTS,
	LIKE_POST,
	COMMENT_POST,
	GET_SINGLE_COMMENT,
	GET_POST,
} from './actionTypes';
import {
	newPostNotLoading,
	setAllPosts,
	setLikePost,
	getAllPosts as getNewPosts,
	getAllPostsFailed,
	setCommentPost,
	updateComment,
	getPostSuccess,
	getPostFailed,
} from './actions';
import { notificationsSettings } from './constants';
import {
	createPost,
	getPosts,
	postLike,
	postComment,
	singleComment,
	getPost as getSinglePost,
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

function* getPost(data) {
	try {
		const res = yield getSinglePost(data.payload);
		if (res.data.status === 'success') {
			yield put(getPostSuccess(res.data.data));
		}
	} catch (err) {
		yield put(getPostFailed(err.response.data.message));
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

function* commentPost(data) {
	try {
		const res = yield postComment(data.payload);
		if (res.data.status === 'success') {
			yield put(setCommentPost(data.payload));
			const comment = yield singleComment(data.payload.id);
			const newComment = comment.data.data;
			newComment.id = comment.data.data.postId;
			yield put(updateComment(newComment));
		}
	} catch (err) {
		console.log(err);
	}
}

function* getComments(data) {
	const id = data.payload;
	try {
		const res = yield singleComment(id);
		if (res.data.status) {
			const newComment = res.data.data;
			newComment.id = res.data.data.postId;
			yield put(updateComment(newComment));
		}
	} catch (err) {
		console.log(err);
	}
}

export default function* root() {
	yield takeEvery(NEW_POST, createNewPost);
	yield takeEvery(GET_ALL_POSTS, getAllPosts);
	yield takeEvery(LIKE_POST, likePost);
	yield takeEvery(COMMENT_POST, commentPost);
	yield takeEvery(GET_SINGLE_COMMENT, getComments);
	yield takeEvery(GET_POST, getPost);
}
