/**
 * Defines the text data on page.
 *
 * @constant
 */
const siteData = {
	siteNameText: 'health-e',
	siteDesc1Text:
		'Connect with friends around the world with great health topics',
};

/**
 * Defines the url for the database.
 *
 * @constant
 */
const DATABASE_API_URL =
	'https://us-central1-health-e-api.cloudfunctions.net/api';
const USER_DATA_URL = `${DATABASE_API_URL}/user`;

export { siteData, USER_DATA_URL };
