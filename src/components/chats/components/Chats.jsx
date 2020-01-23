/* eslint-disable max-lines-per-function */
import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Navigation } from '../../Navigation';
import userImg from '../../../assets/img/profile2.png';
import { pageData } from '../constants';

const renderChatBubbles = () =>
    new Array(20).fill(10).map((el, i) => (
        <div className="c-chat__msgBlock" key={i}>
            <div className={`c-chat__${i % 2 === 0 ? 'msgRight' : 'msgLeft'}`}>
                <div className="c-chat__chatBlock">
                    <div className="c-chat__user">
                        {i % 2 === 0 ? pageData.currentUser : pageData.userName}
                    </div>
                    <div className="c-chat__chatBubble">
                        {pageData.chatText}
                    </div>
                    <div className="c-chat__time">{pageData.time}</div>
                </div>
            </div>
        </div>
    ));

const renderChatList = rooms =>
    rooms.map((el, i) => (
        <div className="c-chat__inboxChatList" key={i}>
            <img
                src={el.attributes[0].imageUrl}
                alt=""
                className="c-chat__userImage"
            />
            <div className="c-chat__info">
                <div className="c-chat__userName">
                    {el.attributes[0].fullName}
                </div>
                <div className="c-chat__chatText">{pageData.chatText}</div>
            </div>
        </div>
    ));

const renderChatLeft = chatState => (
    <div className="c-chat__inbox">
        <div className="c-chat__inboxHead">{pageData.recentText}</div>
        <div className="c-chat__inboxChats">
            {/* <div className="c-chat__inboxChatList --chatActive">
                <img src={userImg} alt="" className="c-chat__userImage" />
                <div className="c-chat__info">
                    <div className="c-chat__userName">{pageData.userName}</div>
                    <div className="c-chat__chatText">{pageData.chatText}</div>
                </div>
            </div> */}
            {chatState.rooms.length > 0
                ? renderChatList(chatState.rooms)
                : null}
        </div>
    </div>
);

const renderChatSend = () => (
    <div className="c-chat__chatSend">
        <form className="f-postCard__bottom">
            <input
                type="text"
                className="f-postCard__input"
                placeholder="Write a comment"
            />
            <Button variant="contained" className="b-button" type="submit">
                {pageData.send}
            </Button>
        </form>
    </div>
);

const renderChatMsgSection = () => (
    <div className="c-chat__msgs">
        <div className="c-chat__msgHead">{pageData.userName}</div>
        <div className="c-chat__msgBody">
            <div className="c-chat__chatMsgs" id="chatMsgs">
                <div className="c-chat__msgBox">{renderChatBubbles()}</div>
            </div>
            {renderChatSend()}
        </div>
    </div>
);

const Chats = () => {
    useEffect(() => {
        const element = document.getElementById('chatMsgs');
        element.scrollTop = element.scrollHeight;
    }, []);

    const chatState = useSelector(state => state.chat);
    return (
        <Fragment>
            <Navigation />
            <div className="c-chat__container">
                <div className="c-chat__box">
                    {renderChatLeft(chatState)}
                    {renderChatMsgSection()}
                </div>
            </div>
        </Fragment>
    );
};

export default Chats;
