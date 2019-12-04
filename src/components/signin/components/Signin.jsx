import React from 'react';
import Button from '@material-ui/core/Button';
import { AuthLayout } from '../../auth';
import { TextInput } from '../../utils/input';
import { signInData } from '../constants';

// APPLICATION STATES
import { useInputFields } from '../states';

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
 * function used to render submit button label on form
 *
 * @function {*} renderButton
 */
const renderButton = () => (
    <div className="a-formAuth__button">
        <Button variant="contained" className="b-button">
            {signInData.signinText}
        </Button>
    </div>
);

/**
 * function used to render signin component
 *
 * @function {*} Signin
 */
const Signin = () => {
    const { formData, handleInputChange } = useInputFields();
    return (
        <AuthLayout>
            <div className="p-signinPage">
                <div className="p-signinPage__heading">
                    {signInData.signinText}
                </div>
                <form className="a-formAuth" onSubmit={handleSubmit}>
                    {renderInput(formData, handleInputChange)}
                    {renderButton()}
                </form>
            </div>
        </AuthLayout>
    );
};

export default Signin;
