/* eslint-disable max-lines-per-function */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import useReactRouter from 'use-react-router';
import { useDispatch, useSelector } from 'react-redux';
import { AuthLayout, renderError } from '../../auth';
import { TextInput } from '../../utils/input';
import { signUpData } from '../constants';
import { SIGN_UP_USER } from '../signupActionTypes';
// APPLICATION STATES
import { useInputFields, useCheckedLabel } from '../states';

const { signupText } = signUpData;

const handleSubmit = (e, userData, dispatch, checked) => {
    e.preventDefault();
    const userInfo = {};
    Object.keys(userData).forEach(el => {
        userInfo[el] = userData[el].value;
    });
    userInfo.userStatus = checked ? 'medical' : 'user';
    dispatch({ type: SIGN_UP_USER, payload: userInfo });
};

/**
 * function used to render text input on form dynamically
 *
 * @function {*} renderInput
 */
const renderInput = (formData, handleInputChange, error = false) => (
    <Fragment>
        {Object.keys(formData).map((el, i) => (
            <TextInput
                key={i}
                handleInputChange={handleInputChange}
                value={formData[el].value}
                name={el}
                label={formData[el].label}
                type={formData[el].type}
                error={error.error[el]}
            />
        ))}
    </Fragment>
);

/**
 * function used to render checkbox label on form
 *
 * @function {*} renderCheckedLabel
 */
const renderCheckedLabel = (checked, handleChecked) => (
    <div className="a-formAuth__check-btn">
        <Checkbox
            checked={!checked}
            onChange={handleChecked}
            value={0}
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        {signUpData.userText}
        <Checkbox
            checked={!checked}
            onChange={handleChecked}
            value={1}
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
const renderButton = state => (
    <div className="a-formAuth__button">
        <Button
            variant="contained"
            className="b-button"
            type="submit"
            disabled={state.loading}
        >
            {state.loading ? (
                <CircularProgress className="b-button__progress" size={25} />
            ) : null}
            {signupText}
        </Button>
    </div>
);

/**
 * function used to render signup component
 *
 * @function {*} Signup
 */
const Signup = () => {
    const { formData, handleInputChange } = useInputFields();
    const { checked, handleChecked } = useCheckedLabel();
    const dispatch = useDispatch();
    const signupState = useSelector(state => state.signup);
    return (
        <AuthLayout>
            <div className="p-signupPage">
                <div className="p-authPage__switch">
                    {signUpData.alreadyMember}
                    <Link to="/signin" className="">
                        {signUpData.signinText}
                    </Link>
                </div>
                <div className="p-signupPage__heading">{signupText}</div>
                <form
                    className="a-formAuth"
                    onSubmit={e => handleSubmit(e, formData, dispatch, checked)}
                >
                    {renderError(signupState)}
                    {renderInput(formData, handleInputChange, signupState)}
                    {renderCheckedLabel(checked, handleChecked)}
                    {renderButton(signupState)}
                </form>
            </div>
        </AuthLayout>
    );
};

export default Signup;
