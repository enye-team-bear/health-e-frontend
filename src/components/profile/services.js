import Axios from 'axios';
import { USER_URL } from './constants';

export const getCurrentUserProfile = async () => {
	const res = await Axios.get(USER_URL);
	return res;
};

export const updateCurrentUserProfile = async data => {
	const res = await Axios.put(USER_URL, data);
	return res;
};
