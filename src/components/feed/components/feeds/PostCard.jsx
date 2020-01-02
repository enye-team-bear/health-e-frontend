/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-lines-per-function */
import React from 'react';
import { useDispatch } from 'react-redux';
import { store } from 'react-notifications-component';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import profileImg from '../../../../assets/img/profile2.png';
import postImg from '../../../../assets/img/postImg1.png';
import heartImg from '../../../../assets/img/heart.svg';
import commentImg from '../../../../assets/img/comment.svg';
import sendIcon from '../../../../assets/img/sendIcon.svg';
import { pageData } from '../../constants';
import { likeSinglePost } from '../../actions';
import { useCommentInput } from '../../states';
import { commentPost } from '../../actions';
import timeConverter from '../../utils/timeConverter';

const handleCommentSubmit = (e, body, id, resetState, dispatch) => {
    e.preventDefault();
    dispatch(commentPost(id, body));
    resetState();

    store.addNotification({
        title: 'Success',
        message: 'Comment added successfully',
        type: 'success', // 'default', 'success', 'info', 'warning'
        container: 'bottom-left', // where to position the notifications
        animationIn: ['animated', 'fadeIn'], // animate.css classes that's applied
        animationOut: ['animated', 'fadeOut'], // animate.css classes that's applied
        dismiss: {
            duration: 3000,
        },
    });
};

/**
 * function used to render post head section
 *
 * @function {*} renderPostHead
 */
const renderPostHead = (postData) => {
    const img = postData.userImage || profileImg;
    const userName = postData.userName || 'Test';
    const postTime = timeConverter(postData.createdAt);
    return (
        <div className="f-postCard__head">
            <div className="f-postCard__left">
                <img src={img} alt="profile" className="f-postCard__userImg" />
                <div className="f-postCard__userData">
                    <div className="f-postCard__userName">{userName}</div>
                    <div className="f-postCard__userProfession">
                        {pageData.postUserJob}{' '}
                        <span>{pageData.postUserType}</span>
                    </div>
                </div>
            </div>
            <div className="f-postCard__right">
                <div className="f-postCard__time">{postTime}</div>
            </div>
        </div>
    );
};

/**
 * function used to render post body section
 *
 * @function {*} renderPostBody
 */
const renderPostBody = (postData, dispatch) => {
    return (
        <div className="f-postCard__body">
            <div className="f-postCard__postText">{postData.thread}</div>
            {postData.imageUrl ? (
                <div className="f-postCard__img">
                    <img src={postData.imageUrl} alt="" />
                </div>
            ) : null}
            <div className="f-postCard__feedback">
                <div className="f-postCard__like">
                    <img
                        src={heartImg}
                        alt=""
                        onClick={() =>
                            dispatch(
                                likeSinglePost(
                                    postData.id ? postData.id : postData.postId,
                                ),
                            )
                        }
                    />
                    <span>{postData.likeCount}</span>
                </div>
                <div className="f-postCard__comment">
                    <img src={commentImg} alt="" />
                    <span>{postData.commentCount}</span>
                </div>
            </div>
        </div>
    );
};

/**
 * function used to render post bottom section
 *
 * @function {*} renderPostBottom
 */
const renderPostBottom = (
    handleCommentTextChanged,
    commentText,
    postId,
    resetState,
    dispatch,
) => (
    <form
        className="f-postCard__bottom"
        onSubmit={(e) =>
            handleCommentSubmit(e, commentText, postId, resetState, dispatch)
        }
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
            <img src={sendIcon} alt="send icon" />
        </Button>
    </form>
);

/**
 * function used to render Post Card component
 *
 * @function {*} PostCard
 */
const PostCard = ({ postData }) => {
    const dispatch = useDispatch();
    const {
        handleCommentTextChanged,
        commentText,
        resetState,
    } = useCommentInput();

    const postId = postData.id || postData.postId;

    return (
        <Paper className="p-page__card">
            <div className="f-postCard">
                {renderPostHead(postData)}
                {renderPostBody(postData, dispatch)}
                {renderPostBottom(
                    handleCommentTextChanged,
                    commentText,
                    postId,
                    resetState,
                    dispatch,
                )}
            </div>
        </Paper>
    );
};

export default PostCard;
