import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Feed } from '../../components/feed';
import { Signup } from '../../components/signup';
import { Signin } from '../../components/signin';
import NoMatch from './NoMatch';
import PrivateRoute from '../authRoutes/PrivateRoute';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <PrivateRoute path="/feed" exact component={Feed} />
            <PrivateRoute path="/" exact component={Feed} />
            <NoMatch />
        </Switch>
    </Router>
);

export default Routes;
