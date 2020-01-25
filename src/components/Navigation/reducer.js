import { REFRESH_NOTIFICATIONS, REFRESH_MSG_NOT } from './actionTypes';

const INITIAL_STATE = {
	notifications: [],
	msgNotifications: [],
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
		case REFRESH_MSG_NOT: {
			return {
				...state,
				msgNotifications: payload,
			};
		}
		default:
			return state;
	}
};
