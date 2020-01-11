import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Feed } from '../../components/feed';
import { Post } from '../../components/post';
import { Signup } from '../../components/signup';
import { Signin } from '../../components/signin';
import { Profile } from '../../components/profile';
import { ForgotPassword } from '../../components/forgotPassword';
import { Topics } from '../../components/topics';
import { SingleTopic } from '../../components/singleTopic';
import NoMatch from './NoMatch';
import PrivateRoute from '../authRoutes/PrivateRoute';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route path="/forgotPassword" component={ForgotPassword} />
            <PrivateRoute path="/singleTopic" exact component={SingleTopic} />
            <PrivateRoute path="/topics" exact component={Topics} />
            <PrivateRoute path="/feed" exact component={Feed} />
            <PrivateRoute path="/profile" exact component={Profile} />
            <PrivateRoute path="/post/:postId" exact component={Post} />
            <PrivateRoute path="/" exact component={Feed} />
            <NoMatch />
        </Switch>
    </Router>
);

export default Routes;
