import Axios from 'axios';
import { NEW_POST_URL, ALL_POST_URL, POST_URL } from './constants';

export const createPost = async (data) => {
	const postData = {
		thread: data,
	};
	const res = await Axios.post(NEW_POST_URL, postData);
	return res;
};

export const getPosts = async () => {
	const res = await Axios.get(ALL_POST_URL);
	return res;
};

export const postLike = async (id) => {
	const res = await Axios.get(`${POST_URL}/${id}/like`);
	return res;
};
