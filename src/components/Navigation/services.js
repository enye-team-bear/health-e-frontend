import Axios from 'axios';
import { NOTIFICATION_URL } from './constants';

export const readNot = async id => {
	console.log(id);
	const res = await Axios.put(`${NOTIFICATION_URL}/${id}`);
	return res;
};
