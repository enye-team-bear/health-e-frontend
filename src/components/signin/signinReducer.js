import { SIGN_IN_USER, UPDATE_SIGN_IN_STATUS } from './signinActionTypes';

const INITIAL_STATE = {
	error: '',
	loading: false,
};
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SIGN_IN_USER: {
			return {
				...state,
				loading: true,
			};
		}
		case UPDATE_SIGN_IN_STATUS: {
			return {
				...state,
				error: action.payload,
				loading: false,
			};
		}
		default:
			return state;
	}
};
