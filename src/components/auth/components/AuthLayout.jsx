import React from 'react';
import Grid from '@material-ui/core/Grid';
import logo from '../../../assets/img/logo.png';
import { cssClasses, siteData } from '../constants';

// Deconstructing css lasses
const {
    AUTH_LAYOUT,
    AUTH_LAYOUT_BRAND,
    AUTH_LAYOUT_BRAND_NAME,
    AUTH_LAYOUT_BRAND_DESC,
    AUTH_LAYOUT_IMG,
    LEFT,
    RIGHT,
} = cssClasses;

/**
 * function used to render left side of authentication layout
 *
 * @function {*} renderCheckedLabel
 */
const authLeftInfo = () => (
    <div className={AUTH_LAYOUT_BRAND}>
        <img src={logo} alt="site logo" className={AUTH_LAYOUT_IMG} />
        <div className={AUTH_LAYOUT_BRAND_NAME}>{siteData.siteNameText}</div>
    </div>
);

const AuthLayout = props => {
    return (
        <Grid container className={AUTH_LAYOUT}>
            <Grid item md={6} className={LEFT}>
                {authLeftInfo()}
                <div className={AUTH_LAYOUT_BRAND_DESC}>
                    <div>{siteData.siteDesc1Text}</div>
                </div>
            </Grid>
            <Grid item md={6} sm={12} className={RIGHT}>
                {props.children}
            </Grid>
        </Grid>
    );
};

export default AuthLayout;
