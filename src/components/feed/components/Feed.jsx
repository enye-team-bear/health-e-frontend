import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Experts from './experts';
import { Navigation } from '../../Navigation';
import FeedProfile from './profile';
import Topic from './topic';
import { Feeds } from './feeds';
import { getAllPosts } from '../actions';
import { actions as userActions } from '../../auth';

/**
 * function used to render grid
 *
 * @function {*} renderGrid
 */
const renderGrid = userData => (
    <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
            <Card className="p-page__card">
                <FeedProfile userData={userData} />
            </Card>
            <Card className="p-page__card">
                <Topic />
            </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Feeds />
        </Grid>
        <Grid item xs={12} sm={3}>
            <Card className="p-page__card mobile-none">
                <Experts />
            </Card>
        </Grid>
    </Grid>
);

/**
 * function used to render Feed component
 *
 * @function {*} Feed
 */
const Feed = () => {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.auth.userData);

    useEffect(() => {
        dispatch(getAllPosts());
        dispatch(userActions.getUserData());
    }, []);
    return (
        <div>
            <Navigation />
            <div className="p-feedPage">
                <div className="p-page__center">{renderGrid(userData)}</div>
            </div>
        </div>
    );
};

export default Feed;
