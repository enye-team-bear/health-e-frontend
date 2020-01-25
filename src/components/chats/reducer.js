/* eslint-disable max-lines-per-function */
import {
	REFRESH_ROOMS,
	CHANGE_ROOM,
	SET_MESSAGES,
	GET_USERS_SUCCESS,
	ADD_USER_SUCCESS,
	CLEAR_NEW_USER,
} from './actionTypes';

const INITIAL_STATE = {
	rooms: [],
	currentRoom: '0',
	messages: [],
	loading: false,
	users: [],
	newUser: null,
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
		case GET_USERS_SUCCESS: {
			return {
				...state,
				users: payload,
			};
		}
		case ADD_USER_SUCCESS: {
			const { user, roomId } = payload;
			return {
				...state,
				newUser: user,
				currentRoom: roomId,
				messages: [],
			};
		}
		case CLEAR_NEW_USER: {
			return {
				...state,
				newUser: null,
			};
		}
		default:
			return state;
	}
};
