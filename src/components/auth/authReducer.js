import { AUTH_USER, AUTH_LOGOUT } from './authActionTypes';

const INITIAL_STATE = {
	isAuthenticated: false,
	user: {},
};

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
		default:
			return state;
	}
};
