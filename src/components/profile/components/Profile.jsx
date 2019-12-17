import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { Navigation } from '../../Navigation';
import { Experts } from '../../feed/components';
import About from './About';
import Overview from './Overview';

/**
 * function used to render grid
 *
 * @function {*} renderGrid
 */
const renderGrid = () => (
    <Grid container spacing={3}>
        <Grid item xs={12} sm={9}>
            <Overview />
            <About />
        </Grid>
        <Grid item xs={12} sm={3}>
            <Card className="p-page__card">
                <Experts />
            </Card>
        </Grid>
    </Grid>
);

/**
 * function used to render profile component
 *
 * @function {*} Profile
 */
const Profile = () => {
    return (
        <div>
            <Navigation />
            <div className="p-feedPage">
                <div className="p-page__center">{renderGrid()}</div>
            </div>
        </div>
    );
};

export default Profile;
