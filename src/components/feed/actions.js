import * as actionTypes from './actionTypes';

export const newPost = (data) => ({
	type: actionTypes.NEW_POST,
	payload: data,
});

export const newPostSuccess = (data) => ({
	type: actionTypes.NEW_POST_SUCCESS,
	payload: data,
});

export const newPostNotLoading = () => ({
	type: actionTypes.NEW_POST_NOT_LOADING,
});

export const getAllPosts = () => ({ type: actionTypes.GET_ALL_POSTS });

export const setAllPosts = (data) => ({
	type: actionTypes.SET_ALL_POSTS,
	payload: data,
});

export const getAllPostsFailed = (info) => ({
	type: actionTypes.GET_ALL_POSTS_FAILED,
	payload: info,
});

export const likeSinglePost = (id) => ({
	type: actionTypes.LIKE_POST,
	payload: id,
});

export const setLikePost = (data) => ({
	type: actionTypes.SET_LIKE_POST,
	payload: data,
});

export const commentPost = (id, body) => ({
	type: actionTypes.COMMENT_POST,
	payload: { id, body },
});

export const setCommentPost = (id) => ({
	type: actionTypes.SET_COMMENT_POST,
	payload: id,
});
