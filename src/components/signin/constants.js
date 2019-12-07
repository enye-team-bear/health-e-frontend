/**
 * Defines the text data on page.
 *
 * @constant
 */
const signInData = {
	signinText: 'Sign in',
};
/**
 * Data rendered for application state.
 *
 * @constant
 */
const userFormData = {
	email: {
		label: 'Email',
		value: '',
		type: 'email',
	},
	password: {
		label: 'Password',
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

export { signInData, userFormData, DATABASE_API_URL };
