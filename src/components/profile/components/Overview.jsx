import Card from '@material-ui/core/Card';
import React from 'react';
import { pageData } from '../constants';
import pencilIcon from '../../../assets/img/pencilIcon.svg';
import profileImg from '../../../assets/img/profile3.png';

/**
 * function used to render overview top section
 *
 * @function {*} renderTop
 */
const renderTop = () => (
    <div className="p-profileOverview__top">
        <div className="p-profileOverview__top--data">
            <img src={profileImg} alt="" className="p-profileOverview__img" />
            <div className="p-profileOverview__userInfo">
                <div className="p-profileOverview__userName">
                    {pageData.userName}
                </div>
                <div className="p-profileOverview__userJob">
                    {pageData.profession}
                </div>
            </div>
        </div>
    </div>
);

/**
 * function used to render overview bottom section
 *
 * @function {*} renderBottom
 */
const renderBottom = () => (
    <div className="p-profileOverview__bottom">
        <div className="p-profileOverview__desc">{pageData.profileDesc}</div>
        <div className="p-profileOverview__userType">{pageData.userType}</div>
    </div>
);

/**
 * function used to render Overview component
 *
 * @function {*} Overview
 */
const Overview = () => {
    return (
        <Card className="p-page__card p-profileOverview">
            {renderTop()}
            {renderBottom()}
            <div className="p-profileOverview__edit">
                <img
                    src={pencilIcon}
                    alt="edit data"
                    className="p-profileOverview__edit--icon"
                />
            </div>
        </Card>
    );
};

export default Overview;
