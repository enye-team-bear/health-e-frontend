import * as actionTypes from './actionTypes';

export const refreshRooms = data => ({
	type: actionTypes.REFRESH_ROOMS,
	payload: data,
});

export const changeRoom = id => ({
	type: actionTypes.CHANGE_ROOM,
	payload: id,
});

export const setMessages = messages => ({
	type: actionTypes.SET_MESSAGES,
	payload: messages,
});

export const sendMessage = (msg, recieverId) => ({
	type: actionTypes.SEND_MESSAGE,
	payload: { msg, recieverId },
});

export const getUsers = () => ({ type: actionTypes.GET_USERS });
export const getUsersSuccess = data => ({
	type: actionTypes.GET_USERS_SUCCESS,
	payload: data,
});
