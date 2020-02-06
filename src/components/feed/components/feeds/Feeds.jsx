/* eslint-disable no-unused-expressions */
/* eslint-disable max-lines-per-function */
import React from 'react';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import PostForm from './PostForm';
import PostCard from './PostCard';
import { getAllPosts } from '../../actions';
import { pageData } from '../../constants';

const renderPosts = (postData, dispatch) => {
    const { allPosts, postLoading, error } = postData;
    let posts = (
        <div className="l-loading__block">
            <CircularProgress className="l-loading__progress" />
        </div>
    );
    if (allPosts.length > 0) {
        posts = allPosts.map(post => (
            <PostCard key={post.id ? post.id : post.postId} postData={post} />
        ));
    }

    if (allPosts.length < 1 && error && !postLoading) {
        posts = (
            <div className="l-loading__block--error">
                {error}{' '}
                <button type="submit" onClick={() => dispatch(getAllPosts())}>
                    {pageData.clickToRetry}
                </button>
            </div>
        );
    }

    return posts;
};

const completePosts = allPosts => {
    const Row = ({ index, style }) => (
        <div style={style}>
            <PostCard
                key={
                    allPosts[index].id
                        ? allPosts[index].id
                        : allPosts[index].postId
                }
                postData={allPosts[index]}
            />
        </div>
    );

    return (
        <AutoSizer>
            {({ height, width }) => (
                <List
                    className="List"
                    height={1000}
                    itemCount={allPosts.length}
                    itemSize={400}
                    width={width}
                >
                    {Row}
                </List>
            )}
        </AutoSizer>
    );
};

/**
 * function used to render Feed component
 *
 * @function {*} Feeds
 */
const Feeds = () => {
    const postData = useSelector(state => state.post);
    const dispatch = useDispatch();
    return (
        <div className="f-feedsSection">
            <PostForm />
            {renderPosts(postData, dispatch)}
        </div>
    );
};

export default Feeds;
