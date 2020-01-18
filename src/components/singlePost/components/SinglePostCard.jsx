/* eslint-disable max-lines-per-function */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import pencilIcon from '../../../assets/img/pencilIcon.svg';
import profileImg from '../../../assets/img/profile2.png';
import commentImg from '../../../assets/img/comment.svg';
import heartImg from '../../../assets/img/heart.svg';
import { useCommentInput } from '../../feed/states';
import { commentTopic, likeSingleTopic } from '../../topics/actions';

const handleSubmit = (e, commentText, resetState, data, dispatch) => {
    e.preventDefault();
    dispatch(commentTopic(data.topicId, commentText));
    resetState();
};

const renderUserInfo = data => {
    dayjs.extend(relativeTime);
    return (
        <div className="p-topics__head">
            <img
                src={data.userImage}
                alt="profile"
                className="p-topics__userImg"
            />
            <div className="p-topics__detail">
                <div className="p-topics__user">{data.userName}</div>
                <div className="p-topics__time">
                    {dayjs(data.createdAt).fromNow()}
                </div>
            </div>
        </div>
    );
};

const renderTopicInfo = data => (
    <div className="p-topics__body">
        <div className="p-topics__content">{data.thread}</div>
    </div>
);

const renderLike = (data, dispatch) => (
    <div className="p-topics__bottom">
        <div className="p-topics__upvote">
            <img
                src={heartImg}
                alt=""
                // onClick={() => dispatch(likeSingleTopic(data.topicId))}
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
            save
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

const SinglePostCard = ({ data }) => {
    const {
        handleCommentTextChanged,
        commentText,
        resetState,
    } = useCommentInput();

    const dispatch = useDispatch();

    return (
        <Card className="p-page__card p-profileOverview">
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

export default SinglePostCard;
