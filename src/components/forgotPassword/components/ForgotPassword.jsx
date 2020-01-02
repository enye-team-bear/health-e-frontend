/* eslint-disable max-lines-per-function */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import logo from '../../../assets/img/logo.png';
import { pageData } from '../constants';

const renderInput = () => (
    <div className="f-postCard__bottom f-forgotPassword__bottom">
        <input
            type="email"
            className="f-postCard__input"
            placeholder="Enter your email"
        />
        <Button variant="contained" className="b-button" type="submit">
            {pageData.recoverTxt}
        </Button>
    </div>
);

const ForgotPassword = () => {
    return (
        <div className="f-forgotPassword">
            <div className="f-forgotPassword__card">
                <Link to="/">
                    <div className="f-forgotPassword__logo">
                        <img src={logo} alt="logo" />
                        {pageData.logoTxt}
                    </div>
                </Link>
                <form action="" className="f-forgotPassword__form">
                    <div className="f-forgotPassword__heading">
                        {pageData.recoverPass}
                    </div>
                    <div className="f-forgotPassword__text">
                        {pageData.enterEmail}
                    </div>
                    {renderInput()}
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
