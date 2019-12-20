import Axios from 'axios';
import { USER_DATA_URL } from './constants';

export const getUserDetails = async () => {
	const res = await Axios.get(USER_DATA_URL);
	return res;
};
