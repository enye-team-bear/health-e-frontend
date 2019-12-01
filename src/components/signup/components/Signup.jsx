import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import { AuthLayout } from '../../auth';
import { TextInput } from '../../utils/input';
import { signUpData, userFormData } from '../constants';

const useInputFields = () => {
    const [formData, setFormData] = useState(userFormData);

    const handleInputChange = event => {
        event.persist();
        const newFormData = { ...formData };
        const newField = { ...newFormData[event.target.name] };
        newField.value = event.target.value;
        newFormData[event.target.name] = newField;
        setFormData(newFormData);
    };
    return {
        formData,
        handleInputChange,
    };
};
const useCheckedLabel = () => {
    const [checked, setChecked] = useState(true);

    const handleChecked = () => setChecked(!checked);
    return {
        checked,
        handleChecked,
    };
};

const handleSubmit = e => {
    e.preventDefault();
};

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
                {/* <p className="p-signupPage__alreadyUser">{data}</p> */}
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
