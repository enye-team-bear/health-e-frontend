/* eslint-disable max-lines-per-function */
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { Navigation } from '../../Navigation';
import NewTopicModal from './NewTopicModal';
import { Experts, Topics as TopicOverview } from '../../feed/components';
import TopicCard from './TopicCard';
import pencilIcon from '../../../assets/img/pencilWhiteIcon.svg';

const renderTopics = () =>
    new Array(10).fill(0).map(i => <TopicCard key={i} />);

const renderCreateTopic = handleModalOpen => (
    <div className="p-topics__createBtn">
        <Button
            variant="contained"
            className="b-button"
            type="submit"
            onClick={handleModalOpen}
        >
            Create a new topic
            <img src={pencilIcon} alt="send icon" />
        </Button>
    </div>
);

/**
 * function used to render grid
 *
 * @function {*} renderGrid
 */
const renderGrid = handleModalOpen => (
    <Grid container spacing={3}>
        <Grid item xs={12} sm={9}>
            {renderCreateTopic(handleModalOpen)}
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
    const [topicModalOpen, setTopicModalOpen] = useState(false);

    const handleModalOpen = () => {
        setTopicModalOpen(true);
    };
    const handleModalClose = () => {
        setTopicModalOpen(false);
    };
    return (
        <div>
            <Navigation />
            <div className="p-feedPage">
                <div className="p-page__center">
                    {renderGrid(handleModalOpen)}
                </div>
            </div>

            <NewTopicModal
                modalOpen={topicModalOpen}
                handleClose={handleModalClose}
            />
        </div>
    );
};

export default Topics;
