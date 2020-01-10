import React from 'react';
import Card from '@material-ui/core/Card';
import pencilIcon from '../../../assets/img/pencilIcon.svg';
// import profileImg from '../../../assets/img/defaultImg.png';
import profileImg from '../../../assets/img/profile2.png';
import commentImg from '../../../assets/img/comment.svg';
import upvoteImg from '../../../assets/img/upvote.svg';
import { pageData } from '../constants';

/**
 * function used to render overview top section
 *
 * @function {*} renderTop
 */
const renderTop = () => (
    <div className="p-profileOverview__top">
        <div className="p-singleTopic__heading">
            What is the most predominante disease which mostly affects Nigerian
            Children
        </div>
    </div>
);

const renderUserInfo = () => (
    <div className="p-topics__head">
        <img src={profileImg} alt="profile" className="p-topics__userImg" />
        <div className="p-topics__detail">
            <div className="p-topics__user">
                {pageData.topicName} <span>{pageData.shared}</span>
            </div>
            <div className="p-topics__time">{pageData.hours}</div>
        </div>
    </div>
);

const renderTopicInfo = () => (
    <div className="p-topics__body">
        {/* <div className="p-topics__heading">{pageData.topicHeading}</div> */}
        <div className="p-topics__content">{pageData.topicContent}</div>
        <div className="p-topics__discuss">{pageData.topicDiscuss}</div>
    </div>
);

const renderLike = () => (
    <div className="p-topics__bottom">
        <div className="p-topics__upvote">
            <img src={upvoteImg} alt="" />
            <span>{pageData.zero}</span>
        </div>
        <div className="p-topics__comment">
            <img src={commentImg} alt="" />
            <span>{pageData.zeroComment}</span>
        </div>
    </div>
);

/**
 * function used to render overview bottom section
 *
 * @function {*} renderBottom
 */
const renderBody = () => (
    <div className="p-topics__card p-singleTopic__body">
        {renderUserInfo()}
        {renderTopicInfo()}
        {renderLike()}
    </div>
);

const SingleTopicTag = () => {
    return (
        <Card className="p-page__card p-profileOverview">
            {renderTop()}
            {renderBody()}
        </Card>
    );
};

export default SingleTopicTag;
