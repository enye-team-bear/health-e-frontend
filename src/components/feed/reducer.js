/* eslint-disable max-lines-per-function */
import {
	NEW_POST,
	NEW_POST_LOADING,
	NEW_POST_SUCCESS,
	NEW_POST_NOT_LOADING,
	GET_ALL_POSTS,
	SET_ALL_POSTS,
	SET_LIKE_POST,
} from './actionTypes';

const INITIAL_STATE = {
	allPosts: [],
	error: '',
	posting: false,
	postLoading: false,
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
		case SET_LIKE_POST: {
			const index = state.allPosts.findIndex(
				(post) => post.id === action.payload.postId,
			);
			return {
				...state,
				allPosts: [
					...state.allPosts.slice(0, index),
					action.payload,
					...state.allPosts.slice(index + 1),
				],
			};
		}
		default:
			return state;
	}
};
