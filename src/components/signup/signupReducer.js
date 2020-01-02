import {
	SIGN_UP_USER,
	SIGN_UP_LOADING,
	SIGN_UP_NOT_LOADING,
	UPDATE_SIGN_UP_STATUS,
} from './signupActionTypes';

const INITIAL_STATE = {
	error: '',
	loading: false,
};
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SIGN_UP_USER: {
			return {
				...state,
				loading: true,
			};
		}
		case SIGN_UP_LOADING: {
			return {
				...state,
				loading: true,
			};
		}
		case SIGN_UP_NOT_LOADING: {
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		}
		case UPDATE_SIGN_UP_STATUS: {
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		}
		default:
			return state;
	}
};
