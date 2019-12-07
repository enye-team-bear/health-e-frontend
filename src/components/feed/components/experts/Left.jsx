import Avatar from '@material-ui/core/Avatar';
import React from 'react';
import defaultImg from '../../../../assets/img/defaultImg.png';
import { profileText } from '../../constants';

const { suggestedExp, name, prof, invite } = profileText;

const renderChip = () => (
    <div>
        <div className='chip'>
            <Avatar src={defaultImg} />
            <div className='texts'>
                <p className='title'>{name}</p>
                <p>{prof}</p>
            </div>
        </div>
        <div className='chip'>
            <Avatar src={defaultImg} />
            <div className='texts'>
                <p className='title'>{name}</p>
                <p>{prof}</p>
            </div>
        </div>
    </div>
)

/**
 * function used to render Feed component
 *
 * @function {*} Feed
 */
const Left = () => (
    <div className="p-right">
        <h2 className="exp">{suggestedExp}</h2>
        <h3 className='inv'>{invite}</h3>
        {renderChip()}
    </div>
);

export default Left;
