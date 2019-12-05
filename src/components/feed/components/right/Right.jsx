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
    <img src={defaultImg} alt='profile' className='prof' />
);

const renderButton = () => (
    <div className="a-view__button">
        <button  className="butt" type='button'>
            {viewProfileText}
        </button>
    </div>
);

const renderGrid = () => (
    <div className='grid'>
        <div className='item1'><h1 className='number'>412</h1><p>connections</p></div>
        <div className='item2'><h1 className='number'>21</h1><p>all posts</p></div>
    </div>
)

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
            {renderGrid()}
        </div>
    </div>
);

export default Right;
