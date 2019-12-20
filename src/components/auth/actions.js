import * as actionTypes from './authActionTypes';

export const getUserData = () => ({ type: actionTypes.GET_USER_DATA });

export const setUserData = (data) => ({
	type: actionTypes.SET_USER_DATA,
	payload: data,
});

export const clearLoading = () => ({ type: actionTypes.CLEAR_LOADING });
