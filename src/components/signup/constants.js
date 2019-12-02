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

/**
 * Defines the classes used in application.
 *
 * @constant
 */
const cssClasses = {
	AUTH_LAYOUT_IMG: 'l-authLayout__img',
	FORM_AUTH: 'a-formAuth',
	FORM_AUTH_BTN: 'a-formAuth__button',
	FORM_AUTH_CHECK_BTN: 'a-formAuth__check-btn',
	SIGNUP_PAGE: 'p-signupPage',
	SIGNUP_PAGE_HEADING: 'p-signupPage__heading',
};

export { cssClasses, signUpData, userFormData };
