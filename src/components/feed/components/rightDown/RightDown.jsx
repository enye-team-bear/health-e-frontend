/* eslint-disable import/order */

import { profileText, topics } from '../../constants';

import React from 'react';

const { title } = profileText;

/**
 * function used to render Feed component
 *
 * @function {*} Feed
 */
const Right = () => (
    <div className="p-right">
        <h2>{title}</h2>
        {topics.map(topic => <p className='topics' key={topic.id}>{topic}</p>)}
    </div>
);

export default Right;
