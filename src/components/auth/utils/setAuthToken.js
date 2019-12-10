import axios from 'axios';

/**
 * Helper function that is used to set authenticaton token on all headers
 *
 * @function setAuthToken
 * @param {String} token - jwt token
 */
const setAuthToken = token => {
	if (token) {
		// Apply to every request
		axios.defaults.headers.common['Authorization'] = token;
	} else {
		// Delete auth header
		delete axios.defaults.headers.common['Authorization'];
	}
};

export default setAuthToken;
