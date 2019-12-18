import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { pageData } from '../constants';
import sendIcon from '../../../assets/img/sendIcon.svg';

/**
 * function used to render first block
 *
 * @function {*} renderFirstBlock
 */
const renderFirstBlock = () => (
    <div className="p-profilePassword__block">
        <div className="p-profilePassword__item">
            <input
                type="password"
                className="f-postCard__input"
                placeholder="Current password"
            />
        </div>
    </div>
);

/**
 * function used to render second block
 *
 * @function {*} renderSecondBlock
 */
const renderSecondBlock = () => (
    <div className="p-profilePassword__block">
        <div className="p-profilePassword__item">
            <input
                type="password"
                className="f-postCard__input"
                placeholder="New password"
            />
        </div>
        <div className="p-profilePassword__item">
            <input
                type="password"
                className="f-postCard__input"
                placeholder="Confirm password"
            />
        </div>
    </div>
);

/**
 * function used to render send button
 *
 * @function {*} renderButton
 */
const renderButton = () => (
    <div className="p-profilePassword__save">
        <Button variant="contained" className="b-button" type="submit">
            {pageData.saveText}
            <img src={sendIcon} alt="send icon" />
        </Button>
    </div>
);

/**
 * function used to render Password component
 *
 * @function {*} Password
 */
const Password = () => {
    return (
        <Card className="p-page__card p-profilePassword">
            <div className="p-profilePassword__head">
                <h2 className="p-profilePassword__title">{pageData.passTxt}</h2>
            </div>
            <div className="p-profilePassword__body">
                {renderFirstBlock()}
                {renderSecondBlock()}
                {renderButton()}
            </div>
        </Card>
    );
};

export default Password;
