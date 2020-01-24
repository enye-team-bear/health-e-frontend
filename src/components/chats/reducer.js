/* eslint-disable max-lines-per-function */
import { REFRESH_ROOMS, CHANGE_ROOM, SET_MESSAGES } from './actionTypes';

const INITIAL_STATE = {
	rooms: [],
	currentRoom: 0,
	messages: [],
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
		case CHANGE_ROOM: {
			return {
				...state,
				currentRoom: payload,
			};
		}
		case SET_MESSAGES: {
			return {
				...state,
				messages: payload,
			};
		}
		default:
			return state;
	}
};
