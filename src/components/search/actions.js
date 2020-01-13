import * as actionTypes from './actionTypes';

export const newPost = data => ({
	type: actionTypes.NEW_POST,
	payload: data,
});

export const newPostSuccess = data => ({
	type: actionTypes.NEW_POST_SUCCESS,
	payload: data,
});

export const newPostNotLoading = () => ({
	type: actionTypes.NEW_POST_NOT_LOADING,
});

export const getAllPosts = () => ({ type: actionTypes.GET_ALL_POSTS });

export const setAllPosts = data => ({
	type: actionTypes.SET_ALL_POSTS,
	payload: data,
});

export const getAllPostsFailed = info => ({
	type: actionTypes.GET_ALL_POSTS_FAILED,
	payload: info,
});

