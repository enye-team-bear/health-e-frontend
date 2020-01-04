/* eslint-disable max-lines-per-function */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import photoImg from '../../../../assets/img/photoIcon.svg';
import sendIcon from '../../../../assets/img/sendIcon.svg';
import { pageData } from '../../constants';
import { usePostInput } from '../../states';
import { newPost } from '../../actions';

const handleSubmit = (e, data, dispatch, resetState) => {
    e.preventDefault();
    if (data !== '') {
        dispatch(newPost(data));
        resetState();
    }
};

/**
 * function used to render form bottom items
 *
 * @function {*} renderFormBottom
 */
const renderFormBottom = () => (
    <div className="f-postForm__bottom">
        <img src={photoImg} alt="post" className="f-postForm__photoIcon" />
        <Button variant="contained" className="b-button" type="submit">
            {pageData.saveText}
            <img src={sendIcon} alt="send icon" />
        </Button>
    </div>
);

/**
 * function used to render PostForm component
 *
 * @function {*} PostForm
 */
const PostForm = () => {
    const { handlePostTextChanged, postText, resetState } = usePostInput();
    const dispatch = useDispatch();
    return (
        <Paper className="p-page__card">
            <form
                className="f-postForm"
                onSubmit={e => handleSubmit(e, postText, dispatch, resetState)}
            >
                <div className="f-postForm__heading">
                    {pageData.createNewPost}
                </div>
                <textarea
                    rows="4"
                    className="f-postForm__textInput"
                    placeholder="Write a new post"
                    onChange={handlePostTextChanged}
                    value={postText}
                />
                {renderFormBottom()}
            </form>
        </Paper>
    );
};

export default PostForm;
