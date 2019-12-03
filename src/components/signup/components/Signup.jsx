import React from 'react';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import { AuthLayout } from '../../auth';
import { TextInput } from '../../utils/input';
import { signUpData } from '../constants';

// APPLICATION STATES
import { useInputFields, useCheckedLabel } from '../states';

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
    <div className="a-formAuth__check-btn">
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
    <div className="a-formAuth__button">
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
            <div className="p-signupPage">
                <div className="p-signupPage__heading">
                    {signUpData.signupText}
                </div>
                <form className="a-formAuth" onSubmit={handleSubmit}>
                    {renderInput(formData, handleInputChange)}
                    {renderCheckedLabel(checked, handleChecked)}
                    {renderButton()}
                </form>
            </div>
        </AuthLayout>
    );
};

export default Signup;
