/* eslint-disable max-lines-per-function */
import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import pencilIcon from '../../../assets/img/pencilIcon.svg';
import profileImg from '../../../assets/img/profile2.png';
import commentImg from '../../../assets/img/comment.svg';
import upvoteImg from '../../../assets/img/upvote.svg';
import { pageData } from '../constants';
import { useCommentInput } from '../../topics/states';
import { commentTopic, likeSingleTopic } from '../../topics/actions';

const handleSubmit = (e, commentText, resetState, data, dispatch) => {
    e.preventDefault();
    dispatch(commentTopic(data.topicId, commentText));
    resetState();
};

/**
 * function used to render overview top section
 *
 * @function {*} renderTop
 */
const renderTop = data => (
    <div className="p-profileOverview__top">
        <div className="p-singleTopic__heading">{data.topic}</div>
    </div>
);

const renderUserInfo = data => (
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

const renderTopicInfo = data => (
    <div className="p-topics__body">
        {/* <div className="p-topics__heading">{pageData.topicHeading}</div> */}
        <div className="p-topics__content">{data.thread}</div>
        <div className="p-topics__discuss">{`${data.commentCount} ${pageData.topicDiscuss}`}</div>
    </div>
);

const renderLike = (data, dispatch) => (
    <div className="p-topics__bottom">
        <div className="p-topics__upvote">
            <img
                src={upvoteImg}
                alt=""
                onClick={() => dispatch(likeSingleTopic(data.topicId))}
            />
            <span>{data.likeCount}</span>
        </div>
        <div className="p-topics__comment">
            <img src={commentImg} alt="" />
            <span>{data.commentCount}</span>
        </div>
    </div>
);

const renderCommentForm = (
    handleCommentTextChanged,
    commentText,
    resetState,
    data,
    dispatch,
) => (
    <form
        className="f-postCard__bottom"
        onSubmit={e => handleSubmit(e, commentText, resetState, data, dispatch)}
    >
        <input
            type="text"
            className="f-postCard__input"
            placeholder="Write a comment"
            value={commentText}
            onChange={handleCommentTextChanged}
        />
        <Button variant="contained" className="b-button" type="submit">
            {pageData.saveText}
        </Button>
    </form>
);

const renderComments = data =>
    data.comments.map((el, i) => (
        <div className="f-postCard__comment-card" key={i}>
            <img
                src={el.userImage}
                alt="user"
                className="f-postCard__comment-userImage"
            />
            <div className="f-postCard__comment-right">
                <div className="f-postCard__comment-userName">
                    {el.userName}
                </div>
                <div className="f-postCard__comment-userProf">{'medical'}</div>
                <div className="f-postCard__comment-comment">{el.body}</div>
            </div>
        </div>
    ));

/**
 * function used to render overview bottom section
 *
 * @function {*} renderBottom
 */
const renderBody = (
    handleCommentTextChanged,
    commentText,
    resetState,
    data,
    dispatch,
) => (
    <div className="p-topics__card p-singleTopic__body">
        {renderUserInfo(data)}
        {renderTopicInfo(data)}
        {renderLike(data, dispatch)}
        {renderCommentForm(
            handleCommentTextChanged,
            commentText,
            resetState,
            data,
            dispatch,
        )}
        <div className="p-singleTopic__commentHead">Comments</div>
        {renderComments(data)}
    </div>
);

const SingleTopicTag = ({ data }) => {
    const {
        handleCommentTextChanged,
        commentText,
        resetState,
    } = useCommentInput();

    const dispatch = useDispatch();

    return (
        <Card className="p-page__card p-profileOverview">
            {renderTop(data)}
            {renderBody(
                handleCommentTextChanged,
                commentText,
                resetState,
                data,
                dispatch,
            )}
        </Card>
    );
};

export default SingleTopicTag;
