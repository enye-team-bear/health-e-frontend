/**
 * Defines the text data on page.
 *
 * @constant
 */
const pageData = {
	topicHeading:
		'What is the most predominante disease which mostly affects Nigerian Children',
	topicContent:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem	ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
	topicDiscuss: 'people are in this discussion',
	zero: '0',
	zeroComment: '0 comments',
	topicName: 'Samuel Danielson',
	shared: 'shared',
	hours: '4h',
	aboutTxt: 'About',
	abbrev: 'TH',
	editIcon: 'edit data',
	passTxt: 'Password Change',
	saveText: 'Save',
	changeUserTxt: 'Change user details',
	professionalTxt: 'Professional',
};

const userFormData = {
	topic: {
		label: 'Topic Name',
		value: '',
		type: 'text',
	},
	title: {
		label: 'Topic Title',
		value: '',
		type: 'text',
	},
	thread: {
		label: 'Topic Thread',
		value: '',
		type: 'text',
	},
};

const notificationsSettings = {
	container: 'bottom-left', // where to position the notifications
	animationIn: ['animated', 'fadeIn'], // animate.css classes that's applied
	animationOut: ['animated', 'fadeOut'], // animate.css classes that's applied
	dismiss: {
		duration: 3000,
	},
};

/**
 * Defines the url for the database.
 *
 * @constant
 */
const DATABASE_API_URL =
	'https://us-central1-health-e-api.cloudfunctions.net/api';
const NEW_TOPIC_URL = `${DATABASE_API_URL}/new_topic`;
const ALL_TOPICS_URL = `${DATABASE_API_URL}/topics`;
const TOPIC_URL = `${DATABASE_API_URL}/topic`;

export {
	pageData,
	userFormData,
	NEW_TOPIC_URL,
	ALL_TOPICS_URL,
	TOPIC_URL,
	notificationsSettings,
};
