import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import React from 'react';
import defaultImg from '../../../../assets/img/defaultImg.png';
import { profileText } from '../../constants';

const { userNameText, viewProfileText } = profileText;
/**
 * function used to render Image
 *
 * @function {*} renderImage
 */
const renderImage = () => (
    <Avatar alt="Display Picture" src={defaultImg} className="prof" />
);

const renderButton = () => (
    <div className="a-view__button">
        <Button variant="contained" className="view-button">
            {viewProfileText}
        </Button>
    </div>
);

/**
 * function used to render Feed component
 *
 * @function {*} Feed
 */
const Right = () => (
    <div>
        <div className="p-right">
            <div className="">{renderImage()}</div>
            <p className="userName">{userNameText}</p>
            {renderButton()}
        </div>
    </div>
);

export default Right;
