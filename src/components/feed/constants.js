/**
 * Defines the text data on page.
 *
 * @constant
 */
const pageData = {
	inviteExp: 'invite an Expert',
	expertName: 'Daniel Mayers',
	expertProf: 'Medical Doctor',
	suggestedExp: 'Suggested Experts',
	topicTitle: 'Topics',
	userNameText: 'Samuel Danielson',
	viewProfileText: 'View profile',
	text412: '0',
	connText: 'connection',
	text20: '0',
	allPostText: 'All posts',
	saveText: 'Save',
	createNewPost: 'Create new post',
	selectTopic: 'Select Topics of Interest.',
	topicsOfInterest: 'Select Topics you are interested in',
	postDefaultText:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	postTime: '12 minutes ago',
	postUserJob: 'Lab technician',
	postUserType: 'Medical',
	likeNum: '23',
	commentNum: '11',
	clickToRetry: 'Click to retry',
};

/**
 * Defines the toics data on page.
 *
 * @constant
 */
const topics = [
	'Malaria',
	'HIV',
	'Maternal Health',
	'Cancer',
	'Fractures',
	'Brain Disorder',
];

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
const NEW_POST_URL = `${DATABASE_API_URL}/new_post`;
const ALL_POST_URL = `${DATABASE_API_URL}/posts`;
const POST_URL = `${DATABASE_API_URL}/post`;

export {
	pageData,
	topics,
	notificationsSettings,
	NEW_POST_URL,
	ALL_POST_URL,
	POST_URL
};
