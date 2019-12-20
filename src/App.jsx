import React from 'react';
import jwtDecode from 'jwt-decode';
import { Provider } from 'react-redux';
import ReactNotifications from 'react-notifications-component';
import store from './store';
import setAuthToken from './components/auth/utils/setAuthToken';
import { AUTH_USER, AUTH_LOGOUT_USER } from './components/auth/authActionTypes';
import { Routes } from './router/components';
// general style
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import './sass/main.scss';

if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwtDecode(localStorage.jwtToken);
    store.dispatch({ type: AUTH_USER, payload: decoded });
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        console.log('expired');
        store.dispatch({ type: AUTH_LOGOUT_USER });
        window.location.href = '/signin';
    }
}

const App = () => {
    return (
        <Provider store={store}>
            <ReactNotifications />
            <Routes />
        </Provider>
    );
};

export default App;
