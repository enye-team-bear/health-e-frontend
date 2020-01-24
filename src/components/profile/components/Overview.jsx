/* eslint-disable max-lines-per-function */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Card from '@material-ui/core/Card';
import React from 'react';
import { pageData } from '../constants';
import pencilIcon from '../../../assets/img/pencilIcon.svg';
import profileImg from '../../../assets/img/defaultImg.png';

/**
 * function used to render overview top section
 *
 * @function {*} renderTop
 */
const renderTop = (fullName, image, profession) => (
    <div className="p-profileOverview__top">
        <div className="p-profileOverview__top--data">
            <img src={image} alt="" className="p-profileOverview__img" />
            <div className="p-profileOverview__userInfo">
                <div className="p-profileOverview__userName">{fullName}</div>
                <div className="p-profileOverview__userJob">{profession}</div>
            </div>
        </div>
    </div>
);

/**
 * function used to render overview bottom section
 *
 * @function {*} renderBottom
 */
const renderBottom = (userStatus, description) => (
    <div className="p-profileOverview__bottom">
        <div className="p-profileOverview__desc">{description}</div>
        <div className="p-profileOverview__userType">{userStatus}</div>
    </div>
);

/**
 * function used to render Overview component
 *
 * @function {*} Overview
 */
const Overview = ({ handleModalOpen, userData }) => {
    const {
        fullName,
        imageUrl,
        userStatus,
        profession,
        description,
    } = userData;
    const image = imageUrl ? imageUrl : profileImg;
    return (
        <Card className="p-page__card p-profileOverview">
            {renderTop(fullName, image, profession)}
            {renderBottom(userStatus, description)}
            <div className="p-profileOverview__edit">
                <img
                    src={pencilIcon}
                    alt="edit data"
                    className="p-profileOverview__edit--icon"
                    onClick={handleModalOpen}
                />
            </div>
        </Card>
    );
};

export default Overview;
