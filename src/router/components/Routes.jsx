import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Feed } from '../../components/feed';
import { Signup } from '../../components/signup';
import { Signin } from '../../components/signin';
import NoMatch from './NoMatch';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route path="/feeds" component={Feed} />
            <Route path="/" exact component={Feed} />
            <NoMatch />
        </Switch>
    </Router>
);

export default Routes;
