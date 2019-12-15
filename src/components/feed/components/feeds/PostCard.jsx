import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import profileImg from '../../../../assets/img/profile2.png';
import postImg from '../../../../assets/img/postImg1.png';
import heartImg from '../../../../assets/img/heart.svg';
import commentImg from '../../../../assets/img/comment.svg';
import sendIcon from '../../../../assets/img/sendIcon.svg';
import { pageData } from '../../constants';

/**
 * function used to render post head section
 *
 * @function {*} renderPostHead
 */
const renderPostHead = () => (
    <div className="f-postCard__head">
        <div className="f-postCard__left">
            <img
                src={profileImg}
                alt="profile"
                className="f-postCard__userImg"
            />
            <div className="f-postCard__userData">
                <div className="f-postCard__userName">
                    {pageData.expertName}
                </div>
                <div className="f-postCard__userProfession">
                    {pageData.postUserJob} <span>{pageData.postUserType}</span>
                </div>
            </div>
        </div>
        <div className="f-postCard__right">
            <div className="f-postCard__time">{pageData.postTime}</div>
        </div>
    </div>
);

/**
 * function used to render post body section
 *
 * @function {*} renderPostBody
 */
const renderPostBody = () => (
    <div className="f-postCard__body">
        <div className="f-postCard__postText">{pageData.postDefaultText}</div>
        <div className="f-postCard__img">
            <img src={postImg} alt="" />
        </div>
        <div className="f-postCard__feedback">
            <div className="f-postCard__like">
                <img src={heartImg} alt="" />
                <span>{pageData.likeNum}</span>
            </div>
            <div className="f-postCard__comment">
                <img src={commentImg} alt="" />
                <span>{pageData.commentNum}</span>
            </div>
        </div>
    </div>
);

/**
 * function used to render post bottom section
 *
 * @function {*} renderPostBottom
 */
const renderPostBottom = () => (
    <div className="f-postCard__bottom">
        <input
            type="text"
            className="f-postCard__input"
            placeholder="Write a comment"
        />
        <Button variant="contained" className="b-button" type="submit">
            {pageData.saveText}
            <img src={sendIcon} alt="send icon" />
        </Button>
    </div>
);

/**
 * function used to render Post Card component
 *
 * @function {*} PostCard
 */
const PostCard = () => {
    return (
        <Paper className="p-page__card">
            <div className="f-postCard">
                {renderPostHead()}
                {renderPostBody()}
                {renderPostBottom()}
            </div>
        </Paper>
    );
};

export default PostCard;
