import React from 'react';
import Button from '@material-ui/core/Button';
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
            What is the most predominate disease which mostly affects Nigerian
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

const renderCommentForm = () => (
    <form className="f-postCard__bottom">
        <input
            type="text"
            className="f-postCard__input"
            placeholder="Write a comment"
        />
        <Button variant="contained" className="b-button" type="submit">
            {pageData.saveText}
        </Button>
    </form>
);

const renderComments = () =>
    new Array(2).fill(0).map((el, i) => (
        <div className="f-postCard__comment-card" key={i}>
            <img
                src={profileImg}
                alt="user"
                className="f-postCard__comment-userImage"
            />
            <div className="f-postCard__comment-right">
                <div className="f-postCard__comment-userName">
                    {pageData.topicName}
                </div>
                <div className="f-postCard__comment-userProf">medical</div>
                <div className="f-postCard__comment-comment">
                    testing comment system available
                </div>
            </div>
        </div>
    ));

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
        {renderCommentForm()}
        <div className="p-singleTopic__commentHead">Comments</div>
        {renderComments()}
    </div>
);

const SingleTopicTag = () => (
    <Card className="p-page__card p-profileOverview">
        {renderTop()}
        {renderBody()}
    </Card>
    );

export default SingleTopicTag;
