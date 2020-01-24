import React from 'react';
import jwtDecode from 'jwt-decode';
import { Provider } from 'react-redux';
import ReactNotifications from 'react-notifications-component';
import algoliasearch from 'algoliasearch';
import { InstantSearch } from 'react-instantsearch-dom';
import store from './store';
import setAuthToken from './components/auth/utils/setAuthToken';
import { AUTH_USER, AUTH_LOGOUT_USER } from './components/auth/authActionTypes';
import { getUserData } from './components/auth/actions';
import { Routes } from './router/components';
// general style
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import './sass/main.scss';

const searchClient = algoliasearch(
    process.env.REACT_APP_ALGOLIA_APP_ID,
    process.env.REACT_APP_ALGOLIA_SEARCH_KEY,
);

if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwtDecode(localStorage.jwtToken);
    store.dispatch({ type: AUTH_USER, payload: decoded });
    store.dispatch(getUserData());
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
            <InstantSearch searchClient={searchClient} indexName="topics">
                <Routes />
            </InstantSearch>
        </Provider>
    );
};

export default App;
