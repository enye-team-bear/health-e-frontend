/* eslint-disable max-lines-per-function */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { Navigation } from '../../Navigation';
import { Experts } from '../../feed/components';
import SinglePostCard from './SinglePostCard';
import { actions } from '../../feed';

const renderPostCard = postData => {
    let post;

    if (postData.singlePost && !postData.error) {
        post = <SinglePostCard data={postData.singlePost} />;
    }

    if (postData.singlePostLoading) {
        post = (
            <div className="l-loading__block">
                <CircularProgress className="l-loading__progress" />
            </div>
        );
    }

    if (postData.error) {
        post = <div>Data unavailable</div>;
    }

    return post;
};

/**
 * function used to render grid
 *
 * @function {*} renderGrid
 */
const renderGrid = postData => (
    <Grid container spacing={3}>
        <Grid item xs={12} sm={9}>
            {renderPostCard(postData)}
        </Grid>
        <Grid item xs={12} sm={3}>
            <Card className="p-page__card">
                <Experts />
            </Card>
        </Grid>
    </Grid>
);

const SinglePost = props => {
    const dispatch = useDispatch();
    const postData = useSelector(state => state.post);
    let prevId = '';
    useEffect(() => {
        if (props.match.params.postId) {
            if (props.match.params.postId !== prevId) {
                dispatch(actions.getPost(props.match.params.postId));
                prevId = props.match.params.postId;
            }
        }
    }, [props.match.params.postId]);

    return (
        <div>
            <Navigation />
            <div className="p-feedPage">
                <div className="p-page__center">{renderGrid(postData)}</div>
            </div>
        </div>
    );
};

export default SinglePost;
