import { REFRESH_NOTIFICATIONS } from './actionTypes';

const INITIAL_STATE = {
	notifications: [],
	loading: false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case REFRESH_NOTIFICATIONS: {
			return {
				...state,
				notifications: payload,
			};
		}
		default:
			return state;
	}
};
