/* eslint-disable import/order */

import { pageData, topics } from '../../constants';

import React from 'react';

/**
 * function used to render Feed topics component
 *
 * @function {*} FeedTopic
 */
const FeedTopic = () => (
    <div className="t-feedTopic">
        <div className="t-feedTopic__head">{pageData.topicTitle}</div>
        {topics.map((topic, i) => (
            <div className="t-feedTopic__topics" key={i}>
                {topic}
            </div>
        ))}
    </div>
);

export default FeedTopic;
