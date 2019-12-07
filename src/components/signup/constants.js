/**
 * Defines the text data on page.
 *
 * @constant
 */
const signUpData = {
	userText: 'User',
	medicalText: 'Medical',
	signupText: 'Sign up',
};

/**
 * Data rendered for application state.
 *
 * @constant
 */
const userFormData = {
	userName: {
		label: 'User Name',
		value: '',
		type: 'text',
	},
	fullName: {
		label: 'Full Name',
		value: '',
		type: 'text',
	},
	email: {
		label: 'Email',
		value: '',
		type: 'email',
	},
	number: {
		label: 'Phone Number',
		value: '',
		type: 'text',
	},
	password: {
		label: 'Password',
		value: '',
		type: 'password',
	},
	confirmPassword: {
		label: 'Confim Password',
		value: '',
		type: 'password',
	},
};

/**
 * Defines the url for the database.
 *
 * @constant
 */
const DATABASE_API_URL =
	'https://us-central1-health-e-api.cloudfunctions.net/api';

export { signUpData, userFormData, DATABASE_API_URL };
