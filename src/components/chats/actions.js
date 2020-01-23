import * as actionTypes from './actionTypes';

export const refreshRooms = data => ({
	type: actionTypes.REFRESH_ROOMS,
	payload: data,
});
