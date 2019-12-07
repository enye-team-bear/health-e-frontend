/* eslint-disable import/order */

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Left from './experts';
import { Navigation } from '../../Navigation';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Right from './profile';
import RightDown from './rightDown';

/**
 * function used to render grid
 *
 * @function {*} renderGrid
 */
const renderGrid = () => (
    <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
            <Card className="p-page__card"><Right /></Card>
            <Card className="p-page__card"><RightDown /></Card>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Paper className="p-page__card">xs=12 sm=4</Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
            <Card className="p-page__card"><Left /></Card>
            <Card className="p-page__card"><RightDown /></Card>
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
