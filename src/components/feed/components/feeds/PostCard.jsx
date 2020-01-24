/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-lines-per-function */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { store } from 'react-notifications-component';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {
    FacebookShareButton,
    FacebookIcon,
    PinterestShareButton,
    PinterestIcon,
    RedditShareButton,
    RedditIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon
} from "react-share";
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import profileImg from '../../../../assets/img/profile2.png';
import postImg from '../../../../assets/img/postImg1.png';
import heartImg from '../../../../assets/img/heart.svg';
import commentImg from '../../../../assets/img/comment2.svg';
import shareImg from '../../../../assets/img/share.svg';
import sendIcon from '../../../../assets/img/sendIcon.svg';
import { pageData, URL, ICON_SIZE } from '../../constants';
import { likeSinglePost , commentPost, getComment } from '../../actions';
import { useCommentInput } from '../../states';

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
const renderPostHead = postData => {
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

const singleComment = (data, key) => (
    <div className="f-postCard__comment-card" key={key}>
        <img
            src={data.userImage ? data.userImage : profileImg}
            alt="user"
            className="f-postCard__comment-userImage"
        />
        <div className="f-postCard__comment-right">
            <div className="f-postCard__comment-userName">{data.userName}</div>
            <div className="f-postCard__comment-userProf">medical</div>
            <div className="f-postCard__comment-comment">{data.body}</div>
        </div>
    </div>
);

/**
 * function used to render post body section
 *
 * @function {*} renderPostBody
 */
const RenderPostBody = (postData, dispatch) => {
    const id = postData.id ? postData.id : postData.postId;
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const popoverId = open ? 'simple-popover' : undefined;

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
                        onClick={() => dispatch(likeSinglePost(id))}
                        className="f-postCard__likeImage"
                    />
                    <span className="f-postCard__likeCount">{postData.likeCount}</span>
                </div>
                <div className="f-postCard__comment">
                    <img src={commentImg} alt="" className="f-postCard__shareImage" />
                    <span className="f-postCard__likeCount" onClick={() => dispatch(getComment(id))}>
                        {postData.commentCount}
                    </span>
                </div>
                <div className="f-postCard__share">
                    <img 
                        aria-describedby={popoverId}
                        src={shareImg} alt="" 
                        className="f-postCard__shareImage" 
                        onClick={handleClick}
                    />
                    <Popover
                        id={popoverId}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <div className="">
                            <FacebookShareButton url={URL}>
                                <FacebookIcon size={ICON_SIZE} round />
                            </FacebookShareButton>
                            <PinterestShareButton url={URL}>
                                <PinterestIcon size={ICON_SIZE} round />
                            </PinterestShareButton>
                            <RedditShareButton url={URL}>
                                <RedditIcon size={ICON_SIZE} round />
                            </RedditShareButton>
                            <TwitterShareButton url={URL}>
                                <TwitterIcon size={ICON_SIZE} round />
                            </TwitterShareButton>
                            <WhatsappShareButton url={URL}>
                                <WhatsappIcon size={ICON_SIZE} round />
                            </WhatsappShareButton>
                        </div>
                    </Popover>
                </div>
            </div>
            {postData.comments ? (
                <div className="f-postCard__comment-section">
                    {postData.comments.map((data, key) =>
                        singleComment(data, key)
                    )}
                </div>
            ) : null}
        </div>
    );
};

/**
 * function used to render post bottom section
 *
 * @function {*} renderPostBottom
 */
const RenderPostBottom = (
    handleCommentTextChanged,
    commentText,
    postId,
    resetState,
    dispatch
) => {

    const [show, setShow] = useState(false);
    const setCommentButton = (e, data) => {
        if(data.length > 1){
            setShow(true);
        }else{
            setShow(false);
        }
        
    };

    return (
        <form
            className="f-postCard__bottom"
            onSubmit={e =>
                handleCommentSubmit(e, commentText, postId, resetState, dispatch)
            }
            onChange={e => setCommentButton(e, commentText)}
        >
            <input
                type="text"
                className="f-postCard__input"
                placeholder="Write a comment"
                value={commentText}
                onChange={handleCommentTextChanged}
            />
            {show ? (
                <Button variant="contained" className="b-button" type="submit">
                    {pageData.saveText}
                </Button>
            ) : (
                <Button variant="contained" className="b-button" disabled>
                    {pageData.saveText}
                </Button>
            )}  
            
        </form>
    );
};

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
                {RenderPostBody(postData, dispatch)}
                {RenderPostBottom(
                    handleCommentTextChanged,
                    commentText,
                    postId,
                    resetState,
                    dispatch
                )}
            </div>
        </Paper>
    );
};

export default PostCard;
