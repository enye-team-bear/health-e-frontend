import Card from '@material-ui/core/Card';
import React from 'react';
import emailIcon from '../../../assets/img/emailIcon.svg';
import { pageData } from '../constants';
import pencilIcon from '../../../assets/img/pencilIcon.svg';
import phoneIcon from '../../../assets/img/phoneIcon.svg';

/**
 * function used to render first block
 *
 * @function {*} renderFirstBlock
 */
const renderFirstBlock = () => (
    <div className="p-profileAbout__block">
        <div className="p-profileAbout__item">
            <div className="p-profileAbout__img --text">{pageData.abbrev}</div>
            <div className="p-profileAbout__info">
                <div className="p-profileAbout__sub">{pageData.profession}</div>
                <div className="p-profileAbout__main">
                    {pageData.workLocation}
                </div>
            </div>
        </div>
        <div className="p-profileAbout__item">
            <img src={emailIcon} alt="email" className="p-profileAbout__img" />
            <div className="p-profileAbout__info">
                <div className="p-profileAbout__sub">{pageData.email}</div>
            </div>
        </div>
    </div>
);

/**
 * function used to render second block
 *
 * @function {*} renderSecondBlock
 */
const renderSecondBlock = () => (
    <div className="p-profileAbout__block">
        <div className="p-profileAbout__item">
            <img src={phoneIcon} alt="phone" className="p-profileAbout__img" />
            <div className="p-profileAbout__info">
                <div className="p-profileAbout__sub">{pageData.phoneNo}</div>
            </div>
        </div>
    </div>
);

/**
 * function used to render About component
 *
 * @function {*} About
 */
const About = () => {
    return (
        <Card className="p-page__card p-profileAbout">
            <div className="p-profileAbout__head">
                <h2 className="p-profileAbout__title">{pageData.aboutTxt}</h2>
            </div>
            <div className="p-profileAbout__body">
                {renderFirstBlock()}
                {renderSecondBlock()}
                <div className="p-profileAbout__edit">
                    <img
                        src={pencilIcon}
                        alt={pageData.editIcon}
                        className="p-profileAbout__edit--icon"
                    />
                </div>
            </div>
        </Card>
    );
};

export default About;
