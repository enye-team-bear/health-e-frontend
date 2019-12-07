import { SIGN_IN_LOADING, SIGN_IN_NOT_LOADING } from './signinActionTypes';
const INITIAL_STATE = {
	error: '',
	loading: false,
};
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SIGN_IN_LOADING: {
			return {
				...state,
				loading: true,
			};
		}
		case SIGN_IN_NOT_LOADING: {
			return {
				...state,
				loading: false,
			};
		}
		default:
			return state;
	}
};
