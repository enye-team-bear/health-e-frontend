/**
 * Defines the text data on page.
 *
 * @constant
 */
const pageData = {
	inviteExp: 'invite an Expert',
	userName: 'Daniel Mayers',
	profession: 'Lab technician',
	userType: 'Medical',
	profileDesc: 'No Profile description yet... Add one now',
	workLocation: 'Teresa Hospital',
	email: 'danielmayers@gmail.com',
	phoneNo: '+234 909 8647 876',
	aboutTxt: 'About',
	abbrev: 'TH',
	editIcon: 'edit data',
	passTxt: 'Password Change',
	saveText: 'Save',
	changeUserTxt: 'Change user details',
	professionalTxt: 'Professional',
};

const profInput = {
	currentTitle: {
		placeholder: 'Current Title',
		value: '',
		type: 'text',
	},
	currentJob: {
		placeholder: 'Current Job',
		value: '',
		type: 'text',
	},
	number: {
		placeholder: 'Phone Number',
		value: '',
		type: 'text',
	},
	email: {
		placeholder: 'Email Address',
		value: '',
		type: 'email',
	},
};

const userInput = {
	fullName: {
		placeholder: 'Full name',
		value: '',
		type: 'text',
	},
	description: {
		placeholder: 'Description',
		value: '',
		type: 'text',
	},
	profession: {
		placeholder: 'Profession',
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
const USER_URL = `${DATABASE_API_URL}/user`;
// const ALL_POST_URL = `${DATABASE_API_URL}/posts`;
// const POST_URL = `${DATABASE_API_URL}/post`;

export { pageData, userInput, profInput, notificationsSettings, USER_URL };
