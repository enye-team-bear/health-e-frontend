import * as actionTypes from './actionTypes';

export const refreshNotifications = data => ({
	type: actionTypes.REFRESH_NOTIFICATIONS,
	payload: data,
});
