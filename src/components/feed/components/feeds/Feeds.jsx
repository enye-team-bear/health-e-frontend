import React from 'react';
import PostForm from './PostForm';
import PostCard from './PostCard';

/**
 * function used to render Feed component
 *
 * @function {*} Feeds
 */
const Feeds = () => {
    return (
        <div className="f-feedsSection">
            <PostForm />
            <PostCard />
        </div>
    );
};

export default Feeds;
