/* eslint-disable max-lines-per-function */
import {
	GET_USER_PROFILE,
	GET_USER_PROFILE_SUCCESS,
	GET_USER_PROFILE_FAIL,
	UPDATE_USER,
	UPDATE_USER_SUCCESS,
	UPDATE_USER_FAIL,
} from './actionTypes';

const INITIAL_STATE = {
	profile: null,
	loading: false,
	error: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case GET_USER_PROFILE: {
			return {
				...state,
			};
		}
		case GET_USER_PROFILE_SUCCESS: {
			return {
				...state,
				error: null,
				profile: payload,
			};
		}
		case GET_USER_PROFILE_FAIL: {
			return {
				...state,
				error: payload,
			};
		}
		case UPDATE_USER: {
			return {
				...state,
				loading: true,
			};
		}
		case UPDATE_USER_SUCCESS: {
			return {
				...state,
				loading: false,
				profile: {
					...state.profile,
					...payload,
				},
			};
		}
		case UPDATE_USER_FAIL: {
			return {
				...state,
				loading: false,
				error: payload,
			};
		}
		default: {
			return state;
		}
	}
};
