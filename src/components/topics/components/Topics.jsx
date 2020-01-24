/* eslint-disable max-lines-per-function */
import React, { useState, useEffect, Fragment } from 'react';
import { Hits, Stats, Pagination } from 'react-instantsearch-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { Navigation } from '../../Navigation';
import NewTopicModal from './NewTopicModal';
import { Experts, Topics as TopicOverview } from '../../feed/components';
import TopicCard from './TopicCard';
import pencilIcon from '../../../assets/img/pencilWhiteIcon.svg';
import { clearTopic } from '../actions';

const Hit = ({ hit }) => <TopicCard key={hit.objectID} data={hit} />;
const Content = () => (
    <main>
        <Stats />

        <Hits hitComponent={Hit} />
        <div>
            <Pagination />
        </div>
    </main>
);

const renderTopics = topicsData =>
    topicsData.allTopics.map((el, i) => (
        <TopicCard key={el.topicId} data={el} />
    ));

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
const renderGrid = (handleModalOpen, topicsData) => (
    <Grid container spacing={3}>
        <Grid item xs={12} sm={9}>
            {renderCreateTopic(handleModalOpen)}
            <Content />
            {/* {renderTopics(topicsData)} */}
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
    const topicsData = useSelector(state => state.topic);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearTopic());
    }, []);

    const handleModalOpen = () => {
        setTopicModalOpen(true);
    };
    const handleModalClose = () => {
        setTopicModalOpen(false);
    };
    return (
        <Fragment>
            <Navigation />
            <div className="p-feedPage">
                <div className="p-page__center">
                    {renderGrid(handleModalOpen, topicsData)}
                </div>
            </div>

            <NewTopicModal
                modalOpen={topicModalOpen}
                handleClose={handleModalClose}
            />
        </Fragment>
    );
};

export default Topics;
