import jwtDecode from 'jwt-decode';
import setAuthToken from './setAuthToken';

/**
 * Helper function that is used to set authenticaton data on storage
 *
 * @function setAuthData
 * @param {String} data - jwt data
 * @return {Object} the decoded jwtToken
 */
const setAuthData = data => {
	localStorage.setItem('jwtToken', data);
	setAuthToken(data);
	const decoded = jwtDecode(data);
	return decoded;
};

export default setAuthData;
