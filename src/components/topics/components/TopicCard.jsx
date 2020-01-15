import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import profileImg from '../../../assets/img/profile2.png';
import commentImg from '../../../assets/img/comment.svg';
import upvoteImg from '../../../assets/img/upvote.svg';
import { pageData } from '../constants';
import { likeTopic } from '../actions';

const renderHeader = data => (
    <div className="p-topics__head">
        <img src={data.userImage} alt="profile" className="p-topics__userImg" />
        <div className="p-topics__detail">
            <div className="p-topics__user">
                {data.userName} <span>{pageData.shared}</span>
            </div>
            <div className="p-topics__time">{pageData.hours}</div>
        </div>
    </div>
);

const renderBody = data => (
    <div className="p-topics__body">
        <div className="p-topics__heading">
            <Link
                to={`/singleTopic/${
                    data.topicId ? data.topicId : data.objectID
                }`}
            >
                {data.topic}
            </Link>
        </div>
        <div className="p-topics__content">{data.thread}</div>
        <div className="p-topics__discuss">{`${data.commentCount} ${pageData.topicDiscuss}`}</div>
    </div>
);

const renderBottom = (dispatch, data) => (
    <div className="p-topics__bottom">
        <div className="p-topics__upvote">
            <img
                src={upvoteImg}
                alt=""
                onClick={() => dispatch(likeTopic(data.topicId))}
            />
            <span>{data.likeCount}</span>
        </div>
        <div className="p-topics__comment">
            <img src={commentImg} alt="" />
            <span>{data.commentCount}</span>
        </div>
    </div>
);

const TopicCard = ({ data }) => {
    const dispatch = useDispatch();
    return (
        <Card className="p-page__card p-topics__card">
            {renderHeader(data)}
            {renderBody(data)}
            {renderBottom(dispatch, data)}
        </Card>
    );
};

export default TopicCard;
