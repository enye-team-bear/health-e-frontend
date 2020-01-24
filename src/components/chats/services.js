/* eslint-disable camelcase */
/* eslint-disable max-lines-per-function */
import Axios from 'axios';
import { MESSAGE_URL, USERS_URL } from './constants';
import { firebaseUsers, firebaseMessages } from '../../firebaseConfig';

export const sendMessage = async (message, recieverId) => {
	const res = await Axios.post(`${MESSAGE_URL}/${recieverId}`, { message });
	return res;
};

export const getAllUsers = async () => {
	const res = await Axios.get(USERS_URL);
	return res;
};

export const formatData = async (data, state) => {
	const { user_id } = state.auth.user;
	const userRooms = data.filter(el => {
		if (user_id === el.participant1 || user_id === el.participant2)
			return el;
	});

	const promises = userRooms.map(async (el, i) => {
		const attributes = [];
		try {
			const snapshot = await firebaseUsers
				.where('userId', 'in', [el.participant1, el.participant2])
				.get();

			snapshot.forEach(doc => {
				attributes.push({
					...doc.data(),
				});
			});
		} catch (err) {
			console.log('Error getting documents', err);
		}
		return { ...el, attributes };
	});

	const userChats = await Promise.all(promises);

	return userChats;
};
