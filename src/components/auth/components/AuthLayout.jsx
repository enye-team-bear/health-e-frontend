import React from 'react';
import Grid from '@material-ui/core/Grid';
import logo from '../../../assets/img/logo.png';
import { siteData } from '../constants';

/**
 * function used to render left side of authentication layout
 *
 * @function {*} renderCheckedLabel
 */
const authLeftInfo = () => (
    <div className="l-authLayout__brand">
        <img src={logo} alt="site logo" className="l-authLayout__img" />
        <div className="l-authLayout__brandName">{siteData.siteNameText}</div>
    </div>
);

const AuthLayout = props => {
    return (
        <Grid container className="l-authLayout">
            <Grid item md={6} className="left">
                {authLeftInfo()}
                <div className="l-authLayout__brandDesc">
                    <div>{siteData.siteDesc1Text}</div>
                </div>
            </Grid>
            <Grid item md={6} sm={12} className="right">
                {props.children}
            </Grid>
        </Grid>
    );
};

export default AuthLayout;
