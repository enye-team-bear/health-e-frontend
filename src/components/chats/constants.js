/**
 * Defines the text data on page.
 *
 * @constant
 */
const pageData = {
	userName: 'Gideon Nnalue',
	chatText:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed	do eiusmod tempor',
	recentText: 'Recents',
	messages: 'messages',
	send: 'send',
	time: '11:01 AM | June 9',
	currentUser: 'You',
};

const DATABASE_API_URL =
	'https://us-central1-health-e-api.cloudfunctions.net/api';
const MESSAGE_URL = `${DATABASE_API_URL}/message`;

export { pageData, MESSAGE_URL };
