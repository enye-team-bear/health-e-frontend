import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { Navigation } from '../../Navigation';
import { Experts } from '../../feed/components';
import SingleTopicCard from './SingleTopicCard';
import { actions } from '../../topics';

const renderTopicCard = topicsData => {
    let topic = (
        <div className="l-loading__block">
            <CircularProgress className="l-loading__progress" />
        </div>
    );

    if (topicsData.topic) {
        topic = <SingleTopicCard data={topicsData.topic} />;
    }

    return topic;
};

/**
 * function used to render grid
 *
 * @function {*} renderGrid
 */
const renderGrid = topicsData => (
    <Grid container spacing={3}>
        <Grid item xs={12} sm={9}>
            {renderTopicCard(topicsData)}
        </Grid>
        <Grid item xs={12} sm={3}>
            <Card className="p-page__card">
                <Experts />
            </Card>
        </Grid>
    </Grid>
);

const SibgleTopic = props => {
    const dispatch = useDispatch();
    const topicsData = useSelector(state => state.topic);

    useEffect(() => {
        if (props.match.params.topicId) {
            dispatch(actions.getTopic(props.match.params.topicId));
        }
    }, []);
    return (
        <div>
            <Navigation />
            <div className="p-feedPage">
                <div className="p-page__center">{renderGrid(topicsData)}</div>
            </div>
        </div>
    );
};

export default SibgleTopic;
