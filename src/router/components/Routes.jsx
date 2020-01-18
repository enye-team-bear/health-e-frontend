/* eslint-disable max-lines-per-function */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Feed } from '../../components/feed';
import { Signup } from '../../components/signup';
import { Signin } from '../../components/signin';
import { Profile } from '../../components/profile';
import { ForgotPassword } from '../../components/forgotPassword';
import { Topics } from '../../components/topics';
import { SingleTopic } from '../../components/singleTopic';
import { SinglePost } from '../../components/singlePost';
import NoMatch from './NoMatch';
import PrivateRoute from '../authRoutes/PrivateRoute';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route path="/forgotPassword" component={ForgotPassword} />
            <PrivateRoute
                path="/singlePost/:postId"
                exact
                component={SinglePost}
            />
            <PrivateRoute
                path="/singleTopic/:topicId"
                exact
                component={SingleTopic}
            />
            <PrivateRoute path="/topics" exact component={Topics} />
            <PrivateRoute path="/feed" exact component={Feed} />
            <PrivateRoute path="/profile" exact component={Profile} />
            <PrivateRoute path="/" exact component={Feed} />
            <NoMatch />
        </Switch>
    </Router>
);

export default Routes;
