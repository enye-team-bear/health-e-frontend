import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import useReactRouter from 'use-react-router';
import { useDispatch, useSelector } from 'react-redux';
import { AuthLayout } from '../../auth';
import { TextInput } from '../../utils/input';
import { signInData } from '../constants';
import { SIGN_IN_USER } from '../signinActionTypes';

// APPLICATION STATES
import { useInputFields } from '../states';

const { signinText } = signInData;

const handleSubmit = (e, userData, dispatch, history) => {
    e.preventDefault();
    const userInfo = {};
    Object.keys(userData).forEach(el => {
        userInfo[el] = userData[el].value;
    });
    dispatch({ type: SIGN_IN_USER, payload: userInfo, history });
};

/**
 * function used to render text input on form dynamically
 *
 * @function {*} renderInput
 */
const renderInput = (formData, handleInputChange) => (
    <Fragment>
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
    </Fragment>
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
            {signinText}
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
    const dispatch = useDispatch();
    const { history } = useReactRouter();
    const signinState = useSelector(state => state.signin);
    return (
        <AuthLayout>
            <div className="p-signinPage">
                <div className="p-signinPage__heading">{signinText}</div>
                <form
                    className="a-formAuth"
                    onSubmit={e => handleSubmit(e, formData, dispatch, history)}
                >
                    {renderInput(formData, handleInputChange)}
                    {renderButton(signinState)}
                </form>
            </div>
        </AuthLayout>
    );
};

export default Signin;
