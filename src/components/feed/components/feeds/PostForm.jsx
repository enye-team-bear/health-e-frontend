/* eslint-disable max-lines-per-function */
import React, { useState } from 'react';
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
 * function used to render form bottom inactive items
 *
 * @function {*} renderFormBottom
 */
const renderFormBottomInActive = () => (
    <div className="f-postForm__bottom">
        <img src={photoImg} alt="post" className="f-postForm__photoIcon" />
        <Button variant="contained" className="b-button-inactive" disabled>
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
    const [show, setShow] = useState(false);
    const { handlePostTextChanged, postText, resetState } = usePostInput();
    const dispatch = useDispatch();

    const setButton = (e, data) => {
        if(data.length > 1){
            setShow(true);
        }else{
            setShow(false);
        }
        
    };
    
    return (
        <Paper className="p-page__card">
            <form
                className="f-postForm"
                onSubmit={e => handleSubmit(e, postText, dispatch, resetState)}
                onChange={e => setButton(e, postText)}
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
                {show ? (
                    renderFormBottom()
                ) : (
                    renderFormBottomInActive()
                )}
                
            </form>
        </Paper>
    );
};

export default PostForm;
