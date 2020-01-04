import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { Navigation } from '../../Navigation';
import { Experts, Topics as TopicOverview } from '../../feed/components';
import TopicCard from './TopicCard';

const renderTopics = () =>
    new Array(10).fill(0).map(i => <TopicCard key={i} />);

/**
 * function used to render grid
 *
 * @function {*} renderGrid
 */
const renderGrid = () => (
    <Grid container spacing={3}>
        <Grid item xs={12} sm={9}>
            {renderTopics()}
        </Grid>
        <Grid item xs={12} sm={3}>
            <Card className="p-page__card">
                <Experts />
            </Card>
            <Card className="p-page__card">
                <TopicOverview />
            </Card>
        </Grid>
    </Grid>
);

const Topics = () => {
    return (
        <div>
            <Navigation />
            <div className="p-feedPage">
                <div className="p-page__center">{renderGrid()}</div>
            </div>
        </div>
    );
};

export default Topics;
