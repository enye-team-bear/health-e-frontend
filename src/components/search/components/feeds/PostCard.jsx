/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-lines-per-function */
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { store } from 'react-notifications-component';
import Paper from '@material-ui/core/Paper';
import profileImg from '../../../../assets/img/profile2.png';
import { pageData } from '../../constants';
import timeConverter from '../../utils/timeConverter';


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
/**
 * function used to render post body section
 *
 * @function {*} renderPostBody
 */
const renderPostBody = (postData, dispatch) => {
    const id = postData.id ? postData.id : postData.postId;
    const postUrl = '/post/' + id
    return (
        <div className="f-postCard__body">
            <Link to={postUrl}>
            <div className="f-postCard__postText">{postData.thread}</div>
            {postData.imageUrl ? (
                <div className="f-postCard__img">
                    <img src={postData.imageUrl} alt="" />
                </div>
            ) : null}
            </Link>
        </div>
    );
};

/**
 * function used to render Post Card component
 *
 * @function {*} PostCard
 */
const PostCard = ({ postData }) => {
    const dispatch = useDispatch();
    const postId = postData.id || postData.postId;

    return (
        <Paper className="p-page__card">
            <div className="f-postCard">
                {renderPostHead(postData, postId)}
                {renderPostBody(postData, dispatch, postId)}
                
            </div>
        </Paper>
    );
};

export default PostCard;
