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
 * Defines the classes used in application.
 *
 * @constant
 */
const cssClasses = {
	AUTH_LAYOUT_IMG: 'l-authLayout__img',
	FORM_AUTH: 'a-formAuth',
	FORM_AUTH_BTN: 'a-formAuth__button',
	FORM_AUTH_CHECK_BTN: 'a-formAuth__check-btn',
	SIGNIN_PAGE: 'p-signinPage',
	SIGNIN_PAGE_HEADING: 'p-signinPage__heading',
};

export { cssClasses, signInData, userFormData };
