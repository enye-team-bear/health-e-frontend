import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/signin" />
                )
            }
        />
    );
};

export default PrivateRoute;
