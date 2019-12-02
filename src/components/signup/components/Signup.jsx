import React from 'react';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import { AuthLayout } from '../../auth';
import { TextInput } from '../../utils/input';
import { cssClasses, signUpData } from '../constants';

// APPLICATION STATES
import { useInputFields, useCheckedLabel } from '../states';

// Deconstructing css lasses
const {
    FORM_AUTH,
    FORM_AUTH_BTN,
    FORM_AUTH_CHECK_BTN,
    SIGNUP_PAGE,
    SIGNUP_PAGE_HEADING,
} = cssClasses;

const handleSubmit = e => {
    e.preventDefault();
};

/**
 * function used to render text input on form dynamically
 *
 * @function {*} renderInput
 */
const renderInput = (formData, handleInputChange) => (
    <React.Fragment>
        {Object.keys(formData).map((el, i) => (
            <TextInput
                key={i}
                handleInputChange={handleInputChange}
                value={formData[el].value}
                name={el}
                label={formData[el].label}
                type={formData[el].type}
            />
        ))}
    </React.Fragment>
);

/**
 * function used to render checkbox label on form
 *
 * @function {*} renderCheckedLabel
 */
const renderCheckedLabel = (checked, handleChecked) => (
    <div className={FORM_AUTH_CHECK_BTN}>
        {signUpData.userText}
        <Switch
            checked={checked}
            onChange={handleChecked}
            value="checkedB"
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        {signUpData.medicalText}
    </div>
);

/**
 * function used to render submit button label on form
 *
 * @function {*} renderButton
 */
const renderButton = () => (
    <div className={FORM_AUTH_BTN}>
        <Button variant="contained" className="b-button">
            {signUpData.signupText}
        </Button>
    </div>
);

const Signup = () => {
    const { formData, handleInputChange } = useInputFields();
    const { checked, handleChecked } = useCheckedLabel();
    return (
        <AuthLayout>
            <div className={SIGNUP_PAGE}>
                <div className={SIGNUP_PAGE_HEADING}>
                    {signUpData.signupText}
                </div>
                <form className={FORM_AUTH} onSubmit={handleSubmit}>
                    {renderInput(formData, handleInputChange)}
                    {renderCheckedLabel(checked, handleChecked)}
                    {renderButton()}
                </form>
            </div>
        </AuthLayout>
    );
};

export default Signup;
