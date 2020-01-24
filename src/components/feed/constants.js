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
	about: 'About',
	aboutTitle: 'About Health-e',
	aboutParagraph1: 'Welcome to Health-e, your number one source for all things health. We\'re dedicated to providing you the very best of health information, with an emphasis on preventive health measures, corrective health measures, health tips and discussions.',
	aboutParagraph2: 'Founded in 2020 by Enye Team Bear, Health-e has come a long way from its beginnings in Nigeria. When Enye Team Bear first started out, their passion for health drove them to start their own health social network.',
	aboutParagraph3: 'We hope you enjoy our product and services as much as we enjoy offering them to you. If you have any questions or comments, please don\'t hesitate to contact us.',
	privacyPolicy: 'Privacy Policy',
	disclaimer: 'Disclaimer',
	support: 'Support',
	copyright: 'Copyright &copy;2020 Enye Team Bear',
	team: 'Enye Team Bear',
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


// eslint-disable-next-line max-len
const DISCLAIMER_URL = 'https://www.disclaimergenerator.net/live.php?token=biKdMCTaYshivMWbTszoaVA5bepkxY17';
// eslint-disable-next-line max-len
const PRIVACY_POLICY_URL = 'https://www.privacypolicygenerator.info/live.php?token=1sFznfEKQnrwL5g8FpkxxFBTlwW4jHbY';
const URL = 'https://health-e-api.web.app/';
const ICON_SIZE = 24;

export {
	pageData,
	topics,
	notificationsSettings,
	NEW_POST_URL,
	ALL_POST_URL,
	POST_URL,
	DISCLAIMER_URL,
	PRIVACY_POLICY_URL,
	URL,
	ICON_SIZE

};
