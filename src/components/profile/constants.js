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
	phoneNumber: {
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

/**
 * Defines the url for the database.
 *
 * @constant
 */
const DATABASE_API_URL =
	'https://us-central1-health-e-api.cloudfunctions.net/api';

export { pageData, profInput };
