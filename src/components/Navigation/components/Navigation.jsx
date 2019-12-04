import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { navData } from '../constants';
import logo from '../../../assets/img/logo.png';

const iconButtons = [
    {
        ariaLabel: 'show 4 new mails',
        badgeContent: 4,
        Component: <MailIcon />,
    },
    {
        ariaLabel: 'show 17 new notifications',
        badgeContent: 17,
        Component: <NotificationsIcon />,
    },
];

/**
 * function used to return icon button for badge
 *
 * @function {*} badgeIcons
 * @return {Component} react component
 */
const badgeIcons = (ariaLabel, badgeContent, Component) => (
    <IconButton aria-label={ariaLabel} color="inherit">
        <Badge badgeContent={badgeContent} color="secondary">
            {Component}
        </Badge>
    </IconButton>
);

/**
 * function used to render navigation brand
 *
 * @function {*} renderNavBrand
 */
const renderNavBrand = () => (
    <div className="n-navigation__brand">
        <img src={logo} alt="" className="n-navigation__logo" />
        <Typography variant="h6" noWrap>
            {navData.siteName}
        </Typography>
    </div>
);

/**
 * function used to render navigation Menu Items
 *
 * @function {*} renderNavMenuItems
 */
const renderNavMenuItems = () => (
    <div className="n-navigation__items">
        {iconButtons.map(el =>
            badgeIcons(el.ariaLabel, el.badgeContent, el.Component)
        )}

        <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
        >
            <AccountCircle />
        </IconButton>
    </div>
);

/**
 * function used to render navigation component
 *
 * @function {*} Navigation
 */
const Navigation = () => {
    return (
        <div style={{ flexGrow: 1 }} className="n-navigation">
            <AppBar position="static">
                <Toolbar className="n-navigation__bar">
                    {renderNavBrand()}
                    {renderNavMenuItems()}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navigation;
