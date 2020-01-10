import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { Navigation } from '../../Navigation';
import { Experts } from '../../feed/components';
import SingleTopicCard from './SingleTopicCard';

/**
 * function used to render grid
 *
 * @function {*} renderGrid
 */
const renderGrid = (handlePersonalModalOpen, handleProfModalOpen, userData) => (
    <Grid container spacing={3}>
        <Grid item xs={12} sm={9}>
            {/* <Overview
                handleModalOpen={handlePersonalModalOpen}
                userData={userData}
            />
            <About handleModalOpen={handleProfModalOpen} userData={userData} />
            <Password /> */}
            <SingleTopicCard />
        </Grid>
        <Grid item xs={12} sm={3}>
            <Card className="p-page__card">
                <Experts />
            </Card>
        </Grid>
    </Grid>
);

const SibgleTopic = () => {
    return (
        <div>
            <Navigation />
            <div className="p-feedPage">
                <div className="p-page__center">{renderGrid()}</div>
            </div>
        </div>
    );
};

export default SibgleTopic;
