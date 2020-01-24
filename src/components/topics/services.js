import Axios from 'axios';
import { NEW_TOPIC_URL, ALL_TOPICS_URL, TOPIC_URL } from './constants';

export const createNewTopic = async data => {
	const res = await Axios.post(NEW_TOPIC_URL, data);
	return res;
};

export const getTopic = async id => {
	const res = await Axios.get(`${TOPIC_URL}/${id}`);
	return res;
};

export const likeTopic = async id => {
	const res = await Axios.get(`${TOPIC_URL}/${id}/like`);
	return res;
};

export const commentTopic = async ({ id, body }) => {
	const res = await Axios.post(`${TOPIC_URL}/${id}/comment`, { body });
	return res;
};
