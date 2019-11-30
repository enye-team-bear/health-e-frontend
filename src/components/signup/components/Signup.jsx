import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import { AuthLayout } from '../../auth';
import { TextInput } from '../../utils/input';
import { user, medical, signup } from '../../../constants/siteData';

const data = 'Already a user?';

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
        {user}
        <Switch
            checked={checked}
            onChange={handleChecked}
            value="checkedB"
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        {medical}
    </div>
);

const renderButton = () => (
    <div className="a-formAuth__button">
        <Button variant="contained" className="b-button">
            {signup}
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
                <div className="p-signupPage__heading">{signup}</div>
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
