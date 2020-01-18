import * as actionTypes from './actionTypes';

export const refreshNotifications = data => ({
	type: actionTypes.REFRESH_NOTIFICATIONS,
	payload: data,
});

export const readNotification = id => ({
	type: actionTypes.READ_NOTIFICATION,
	payload: id,
});
