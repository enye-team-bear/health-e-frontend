/* eslint-disable max-lines-per-function */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import PostForm from './PostForm';
import PostCard from './PostCard';
import { getAllPosts } from '../../actions';

const renderPosts = (postData, dispatch) => {
    const { allPosts, postLoading, error } = postData;
    let posts = (
        <div className="l-loading__block">
            <CircularProgress className="l-loading__progress" />
        </div>
    );
    if (allPosts.length > 0 && !postLoading) {
        posts = allPosts.map((post) => (
            <PostCard key={post.id ? post.id : post.postId} postData={post} />
        ));
    }

    if (allPosts.length < 1 && error && !postLoading) {
        posts = (
            <div className="l-loading__block--error">
                {error}{' '}
                <button onClick={() => dispatch(getAllPosts())}>
                    Click to retry
                </button>
            </div>
        );
    }

    return posts;
};

/**
 * function used to render Feed component
 *
 * @function {*} Feeds
 */
const Feeds = () => {
    const postData = useSelector((state) => state.post);
    const dispatch = useDispatch();
    return (
        <div className="f-feedsSection">
            <PostForm />
            {renderPosts(postData, dispatch)}
        </div>
    );
};

export default Feeds;
