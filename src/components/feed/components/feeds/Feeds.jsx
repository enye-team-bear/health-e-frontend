import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import PostForm from './PostForm';
import PostCard from './PostCard';

const renderPosts = (postData) => {
    const { allPosts, postLoading } = postData;
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
    return posts;
};

/**
 * function used to render Feed component
 *
 * @function {*} Feeds
 */
const Feeds = () => {
    const postData = useSelector((state) => state.post);
    return (
        <div className="f-feedsSection">
            <PostForm />
            {renderPosts(postData)}
        </div>
    );
};

export default Feeds;
