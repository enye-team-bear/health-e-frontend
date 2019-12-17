import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Experts from './experts';
import { Navigation } from '../../Navigation';
import FeedProfile from './profile';
import Topic from './topic';
import { Feeds } from './feeds';

/**
 * function used to render grid
 *
 * @function {*} renderGrid
 */
const renderGrid = () => (
    <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
            <Card className="p-page__card">
                <FeedProfile />
            </Card>
            <Card className="p-page__card">
                <Topic />
            </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Feeds />
        </Grid>
        <Grid item xs={12} sm={3}>
            <Card className="p-page__card">
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
    return (
        <div>
            <Navigation />
            <div className="p-feedPage">
                <div className="p-page__center">{renderGrid()}</div>
            </div>
        </div>
    );
};

export default Feed;
