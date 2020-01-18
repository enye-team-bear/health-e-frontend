/* eslint-disable max-lines-per-function */
import {
	NEW_TOPIC,
	NEW_TOPIC_SUCCESS,
	NEW_TOPIC_FAILED,
	REFRESH_TOPICS,
	GET_TOPIC,
	GET_TOPIC_SUCCESS,
	GET_TOPIC_FAILED,
	CLEAR_TOPIC,
	LIKE_TOPIC_SUCCESS,
} from './actionTypes';

const INITIAL_STATE = {
	allTopics: [],
	topic: null,
	error: null,
	posting: false,
	topicLoading: false,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case NEW_TOPIC: {
			return {
				...state,
				posting: true,
			};
		}
		case NEW_TOPIC_SUCCESS: {
			return {
				...state,
				posting: false,
				error: null,
			};
		}
		case NEW_TOPIC_FAILED: {
			return {
				...state,
				posting: false,
				error: action.payload,
			};
		}
		case REFRESH_TOPICS: {
			return {
				...state,
				allTopics: action.payload,
				error: null,
			};
		}
		case GET_TOPIC: {
			return {
				...state,
				topicLoading: true,
				error: null,
			};
		}
		case GET_TOPIC_SUCCESS: {
			return {
				...state,
				topic: action.payload,
				topicLoading: false,
				error: null,
			};
		}
		case GET_TOPIC_FAILED: {
			return {
				...state,
				topicLoading: false,
				error: action.payload,
			};
		}
		case CLEAR_TOPIC: {
			return {
				...state,
				topic: null,
				error: null,
			};
		}
		case LIKE_TOPIC_SUCCESS: {
			return {
				...state,
				topic: {
					...state.topic,
					likeCount: state.topic.likeCount + 1,
					error: null,
				},
			};
		}
		default:
			return state;
	}
};
