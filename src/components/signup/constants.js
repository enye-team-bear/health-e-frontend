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
	phoneNumber: {
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

export { signUpData, userFormData };
