/* eslint-disable max-lines-per-function */
import React, { useEffect, useCallback } from 'react';
import useReactRouter from 'use-react-router';
import { SearchBox } from 'react-instantsearch-dom';
import { NavLink, Link } from 'react-router-dom';
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

const svg = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="n-navigation__search-icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
    >
        <path
            fill="#fff"
            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
        />
        <path d="M0 0h24v24H0z" fill="none" />
    </svg>
);

/**
 * function used to return icon button for badge
 *
 * @function {*} badgeIcons
 * @return {Component} react component
 */
const badgeIcons = (ariaLabel, badgeContent, Component, key) => (
    <IconButton aria-label={ariaLabel} color="inherit" key={key}>
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
        <Link to="/">
            <Typography variant="h6" noWrap>
                {navData.siteName}
            </Typography>
        </Link>
    </div>
);

/**
 * function used to render navigation Menu Items
 *
 * @function {*} renderNavMenuItems
 */
const renderNavMenuItems = () => (
    <div className="n-navigation__items">
        <NavLink to="/topics" className="n-navigation_link">
            {navData.topicText}
        </NavLink>
        {iconButtons.map((el, i) =>
            badgeIcons(el.ariaLabel, el.badgeContent, el.Component, i),
        )}
        <NavLink to="/profile">
            <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
            >
                <AccountCircle />
            </IconButton>
        </NavLink>
    </div>
);

/**
 * function used to render navigation component
 *
 * @function {*} Navigation
 */
const Navigation = () => {
    const { history, location } = useReactRouter();
    let searchInput;

    const inputFunction = useCallback(event => {
        if (location.pathname !== '/topics') {
            history.push('/topics');
        }
    }, []);

    useEffect(() => {
        searchInput = document.getElementsByClassName('ais-SearchBox-input')[0];

        if (location.pathname === '/topics') {
            searchInput.focus();
        }

        searchInput.addEventListener('focus', inputFunction);
        return () => {
            searchInput.removeEventListener('focus', inputFunction);
        };
    }, [inputFunction]);

    return (
        <div style={{ flexGrow: 1 }} className="n-navigation">
            <AppBar position="static">
                <Toolbar className="n-navigation__bar">
                    {renderNavBrand()}
                    <SearchBox
                        className="search-bar"
                        translations={{ placeholder: 'Search for Topics' }}
                    />
                    {renderNavMenuItems()}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navigation;
