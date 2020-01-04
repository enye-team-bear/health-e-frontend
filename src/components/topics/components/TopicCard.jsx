import React from 'react';
import Card from '@material-ui/core/Card';
import profileImg from '../../../assets/img/profile2.png';
import commentImg from '../../../assets/img/comment.svg';
import upvoteImg from '../../../assets/img/upvote.svg';
import { pageData } from '../constants';

const renderHeader = () => (
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

const renderBody = () => (
    <div className="p-topics__body">
        <div className="p-topics__heading">{pageData.topicHeading}</div>
        <div className="p-topics__content">{pageData.topicContent}</div>
        <div className="p-topics__discuss">{pageData.topicDiscuss}</div>
    </div>
);

const renderBottom = () => (
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

const TopicCard = () => {
    return (
        <Card className="p-page__card p-topics__card">
            {renderHeader()}
            {renderBody()}
            {renderBottom()}
        </Card>
    );
};

export default TopicCard;
