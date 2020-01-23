import { REFRESH_ROOMS } from './actionTypes';

const INITIAL_STATE = {
	rooms: [],
	loading: false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case REFRESH_ROOMS: {
			return {
				...state,
				rooms: payload,
			};
		}
		default:
			return state;
	}
};
