// import * as actionTypes from './actionTypes';
import {
	GET_USER_PROFILE,
	GET_USER_PROFILE_SUCCESS,
	GET_USER_PROFILE_FAIL,
	UPDATE_USER,
	UPDATE_USER_SUCCESS,
	UPDATE_USER_FAIL,
} from './actionTypes';

export const getUserProfile = () => ({
	type: GET_USER_PROFILE,
});

export const getUserProfileSuccess = data => ({
	type: GET_USER_PROFILE_SUCCESS,
	payload: data,
});

export const getUserProfileFail = data => ({
	type: GET_USER_PROFILE_FAIL,
	payload: data,
});

export const updateUserProfile = (data, close) => ({
	type: UPDATE_USER,
	payload: { data, close },
});

export const updateUserProfileSuccess = data => ({
	type: UPDATE_USER_SUCCESS,
	payload: data,
});

export const updateUserProfileFail = data => ({
	type: UPDATE_USER_FAIL,
	payload: data,
});
