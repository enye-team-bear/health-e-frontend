import Avatar from '@material-ui/core/Avatar';
import React from 'react';
import defaultImg from '../../../../assets/img/defaultImg.png';
import { pageData } from '../../constants';

/**
 * function used to render online experts
 *
 * @function {*} renderExperts
 */
const renderExperts = () => {
    const experts = [];
    for (let i = 0; i < 4; i++) {
        experts.push(
            <div className="e-feedExperts__expertBlock" key={i}>
                <Avatar src={defaultImg} />
                <div className="e-feedExperts__details">
                    <div className="e-feedExperts__name">
                        {pageData.expertName}
                    </div>
                    <div className="e-feedExperts__proff">
                        {pageData.expertProf}
                    </div>
                </div>
            </div>,
        );
    }
    return experts;
};

/**
 * function used to render Feed Experts component
 *
 * @function {*} FeedExperts
 */
const FeedExperts = () => (
    <div className="e-feedExperts">
        <div className="e-feedExperts__head">{pageData.suggestedExp}</div>
        <div className="e-feedExperts__subHead">{pageData.inviteExp}</div>
        <div className="e-feedExperts__experts">{renderExperts()}</div>
    </div>
);

export default FeedExperts;
