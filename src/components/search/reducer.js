/* eslint-disable max-lines-per-function */
import {
	NEW_POST,
	NEW_POST_LOADING,
	NEW_POST_SUCCESS,
	NEW_POST_NOT_LOADING,
	GET_ALL_POSTS,
	SET_ALL_POSTS,
	GET_ALL_POSTS_FAILED,
	SET_LIKE_POST,
	SET_COMMENT_POST,
	UPDATE_SINGLE_COMMENT,
} from './actionTypes';

const INITIAL_STATE = {
	allPosts: [],
	error: '',
	posting: false,
	postLoading: false,
};

/**
 * function used to update comments
 * @param {object} state
 * @param {object} action
 * @function {*} postComment
 */
const postComment = (state, action) => {
	const allPosts = state.allPosts.map((post, i) => {
		if (post.id === action.payload.id) {
			return {
				...post,
				commentCount: state.allPosts[i].commentCount + 1,
			};
		}
		return post;
	});
	return allPosts;
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case NEW_POST: {
			return {
				...state,
				posting: true,
			};
		}
		case NEW_POST_SUCCESS: {
			return {
				...state,
				allPosts: [action.payload, ...state.allPosts],
			};
		}
		case NEW_POST_NOT_LOADING: {
			return {
				...state,
				posting: false,
				error: action.payload,
			};
		}
		case GET_ALL_POSTS: {
			return {
				...state,
				postLoading: true,
			};
		}
		case SET_ALL_POSTS:
			return {
				...state,
				allPosts: action.payload,
				postLoading: false,
			};
		case GET_ALL_POSTS_FAILED: {
			return {
				...state,
				postLoading: false,
				error: action.payload,
			};
		}
		default:
			return state;
	}
};
