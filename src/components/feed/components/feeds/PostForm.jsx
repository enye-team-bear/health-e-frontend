import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import photoImg from '../../../../assets/img/photoIcon.svg';
import sendIcon from '../../../../assets/img/sendIcon.svg';
import { pageData } from '../../constants';

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
    return (
        <Paper className="p-page__card">
            <div className="f-postForm">
                <div className="f-postForm__heading">
                    {pageData.createNewPost}
                </div>
                <textarea
                    rows="4"
                    className="f-postForm__textInput"
                    placeholder="Write a new post"
                />
                {renderFormBottom()}
            </div>
        </Paper>
    );
};

export default PostForm;
