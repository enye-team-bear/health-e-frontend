import {
	AUTH_USER,
	AUTH_LOGOUT,
	CLEAR_LOADING,
	GET_USER_DATA,
	SET_USER_DATA,
} from './authActionTypes';

const INITIAL_STATE = {
	isAuthenticated: false,
	user: {},
	userData: {},
	loading: false,
};

// eslint-disable-next-line max-lines-per-function
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case AUTH_USER: {
			return {
				...state,
				isAuthenticated: true,
				user: action.payload,
			};
		}
		case AUTH_LOGOUT: {
			return {
				...state,
				isAuthenticated: false,
				user: {},
			};
		}
		case GET_USER_DATA: {
			return {
				...state,
				loading: true,
			};
		}
		case SET_USER_DATA: {
			return {
				...state,
				userData: action.payload,
			};
		}
		case CLEAR_LOADING: {
			return {
				...state,
				loading: false,
			};
		}
		default:
			return state;
	}
};
