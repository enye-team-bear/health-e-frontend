import React from 'react';
import defaultImg from '../../../../assets/img/defaultImg.png';
import { pageData } from '../../constants';

/**
 * function used to render profile data count
 *
 * @function {*} renderProfileCount
 */
const renderProfileCount = () => (
    <div className="p-feedProfile__count">
        <div className="p-feedProfile__count-item">
            <div className="p-feedProfile__count-number">
                {pageData.text412}
            </div>
            <div className="p-feedProfile__count-desc">{pageData.connText}</div>
        </div>
        <div className="p-feedProfile__count-divider" />
        <div className="p-feedProfile__count-item">
            <div className="p-feedProfile__count-number">{pageData.text20}</div>
            <div className="p-feedProfile__count-desc">
                {pageData.allPostText}
            </div>
        </div>
    </div>
);

/**
 * function used to render Feed profile component
 *
 * @function {*} FeedProfile
 */
const FeedProfile = () => (
    <div className="p-feedProfile">
        <div className="p-feedProfile__top">
            <img
                src={defaultImg}
                alt="profile img"
                className="p-feedProfile__image"
            />
            <div className="p-feedProfile__name">{pageData.userNameText}</div>
            <div className="p-feedProfile__button">
                <a href="/profile">{pageData.viewProfileText}</a>
            </div>
        </div>
        {renderProfileCount()}
    </div>
);

export default FeedProfile;
