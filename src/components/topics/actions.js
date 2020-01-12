import * as actionTypes from './actionTypes';

export const newTopic = (data, close) => ({
	type: actionTypes.NEW_TOPIC,
	payload: { data, close },
});

export const newTopicSuccess = data => ({
	type: actionTypes.NEW_TOPIC_SUCCESS,
	payload: data,
});

export const newTopicFailed = data => ({
	type: actionTypes.NEW_TOPIC_FAILED,
	payload: data,
});

export const refreshTopics = data => ({
	type: actionTypes.REFRESH_TOPICS,
	payload: data,
});

export const getTopic = data => ({
	type: actionTypes.GET_TOPIC,
	payload: data,
});

export const getTopicSuccess = data => ({
	type: actionTypes.GET_TOPIC_SUCCESS,
	payload: data,
});

export const getTopicFailed = data => ({
	type: actionTypes.GET_TOPIC_FAILED,
	payload: data,
});

export const clearTopic = () => ({
	type: actionTypes.CLEAR_TOPIC,
});

export const likeTopic = id => ({
	type: actionTypes.LIKE_TOPIC,
	payload: id,
});

export const likeSingleTopic = id => ({
	type: actionTypes.LIKE_SINGLE_TOPIC,
	payload: id,
});

export const likeTopicSuccess = data => ({
	type: actionTypes.LIKE_TOPIC_SUCCESS,
	payload: data,
});

export const commentTopic = (id, body) => ({
	type: actionTypes.COMMENT_TOPIC,
	payload: { id, body },
});
