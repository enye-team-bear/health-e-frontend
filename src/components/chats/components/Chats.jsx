/* eslint-disable max-lines-per-function */
import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Navigation } from '../../Navigation';
import userImg from '../../../assets/img/profile2.png';
import { pageData } from '../constants';
import { firebaseMessages } from '../../../firebaseConfig';
import { changeRoom, setMessages, sendMessage, getUsers } from '../actions';

const renderChatBubbles = (messages, userId) =>
    messages.map((el, i) => (
        <div className="c-chat__msgBlock" key={i}>
            <div
                className={`c-chat__${
                    el.sender === userId ? 'msgRight' : 'msgLeft'
                }`}
            >
                <div className="c-chat__chatBlock">
                    <div className="c-chat__chatBubble">{el.message}</div>
                    <div className="c-chat__time">
                        {moment(el.createdAt).format('LT')}
                    </div>
                </div>
            </div>
        </div>
    ));
const renderChatList = (rooms, dispatch, userId) =>
    rooms.map((el, i) => (
        <div
            className="c-chat__inboxChatList"
            key={i}
            onClick={() => dispatch(changeRoom(el.roomId))}
        >
            <img
                src={
                    el.attributes[0].userId === userId
                        ? el.attributes[1].imageUrl
                        : el.attributes[0].imageUrl
                }
                alt=""
                className="c-chat__userImage"
            />
            <div className="c-chat__info">
                <div className="c-chat__userName">
                    {el.attributes[0].userId === userId
                        ? el.attributes[1].fullName
                        : el.attributes[0].fullName}
                </div>
                <div className="c-chat__chatText">{pageData.chatText}</div>
            </div>
        </div>
    ));

const renderChatLeft = (chatState, dispatch, userId, handleUserListActive) => (
    <div className="c-chat__inbox">
        <div className="c-chat__inboxHead">
            <div>{pageData.recentText}</div>
            <div className="c-chat__inboxNew" onClick={handleUserListActive}>
                new
            </div>
        </div>
        <div className="c-chat__inboxChats">
            {/* <div className="c-chat__inboxChatList --chatActive">
                <img src={userImg} alt="" className="c-chat__userImage" />
                <div className="c-chat__info">
                    <div className="c-chat__userName">{pageData.userName}</div>
                    <div className="c-chat__chatText">{pageData.chatText}</div>
                </div>
            </div> */}
            {chatState.rooms.length > 0
                ? renderChatList(chatState.rooms, dispatch, userId)
                : null}
        </div>
    </div>
);

const renderChatUsers = (
    userListActive,
    handleUserListActive,
    dispatch,
    users,
) => {
    let allUsers = (
        <div className="l-loading__block">
            <CircularProgress className="l-loading__progress" />
        </div>
    );

    if (users.length > 0) {
        allUsers = users.map(user => (
            <div className="c-chat__userChatList" key={user.userId}>
                <img src={user.imageUrl} alt="" className="c-chat__userImage" />
                <div className="c-chat__info">
                    <div className="c-chat__userName">{user.fullName}</div>
                    <div className="c-chat__chatText">{user.email}</div>
                </div>
            </div>
        ));
    }
    return (
        <div
            className={`c-chat__user ${!userListActive ? '--userActive' : ''}`}
        >
            <div className="c-chat__userHead">
                <div>Users</div>
                <div
                    className="c-chat__userBack"
                    onClick={handleUserListActive}
                >
                    Back
                </div>
            </div>
            <div className="c-chat__userLists">{allUsers}</div>
        </div>
    );
};

const handleSubmit = (e, message, dispatch, messages, userId) => {
    e.preventDefault();
    const recieverId =
        messages[0].reciever === userId
            ? messages[0].sender
            : messages[0].reciever;
    dispatch(sendMessage(message, recieverId));
};

const renderChatSend = (message, handleMessage, dispatch, messages, userId) => (
    <div className="c-chat__chatSend">
        <form
            className="f-postCard__bottom"
            onSubmit={e => handleSubmit(e, message, dispatch, messages, userId)}
        >
            <input
                type="text"
                className="f-postCard__input"
                placeholder="Write a comment"
                value={message}
                onChange={handleMessage}
            />
            <Button variant="contained" className="b-button" type="submit">
                {pageData.send}
            </Button>
        </form>
    </div>
);

const renderChatMsgSection = (
    chatState,
    userId,
    message,
    handleMessage,
    dispatch,
    userListActive,
    handleUserListActive,
) => (
    <div className="c-chat__msgs">
        <div className="c-chat__msgHead">{pageData.userName}</div>
        <div className="c-chat__msgBody">
            <div className="c-chat__chatMsgs" id="chatMsgs">
                <div className="c-chat__msgBox">
                    {renderChatBubbles(chatState.messages, userId)}
                </div>
            </div>
            {renderChatUsers(
                userListActive,
                handleUserListActive,
                dispatch,
                chatState.users,
            )}
            {renderChatSend(
                message,
                handleMessage,
                dispatch,
                chatState.messages,
                userId,
            )}
        </div>
    </div>
);

const Chats = () => {
    const dispatch = useDispatch();

    const chatState = useSelector(state => state.chat);
    const userId = useSelector(state => state.auth.userData.userId);
    const roomId = chatState.currentRoom;
    let prevRoomId = null;
    const [firebaseRef, setFirebaseReference] = useState(
        firebaseMessages.where('roomId', '==', roomId),
    );
    const [message, setMessage] = useState('');
    const [userListActive, setUserListActive] = useState(false);

    const handleUserListActive = () => {
        setUserListActive(!userListActive);
    };

    const handleMessage = e => {
        setMessage(e.target.value);
    };

    const listenToData = ref => {
        ref.onSnapshot(querySnapshot => {
            const messages = [];
            querySnapshot.forEach(doc => {
                messages.push(doc.data());
            });
            dispatch(setMessages(messages));
        });
    };

    useEffect(() => {
        listenToData(firebaseRef);
        const element = document.getElementById('chatMsgs');
        element.scrollTop = element.scrollHeight;
    }, []);

    useEffect(() => {
        if (roomId) {
            if (roomId !== prevRoomId) {
                const newFirebaseRef = firebaseMessages.where(
                    'roomId',
                    '==',
                    roomId,
                );
                setFirebaseReference(newFirebaseRef);
                listenToData(newFirebaseRef);
                prevRoomId = roomId;
            }
        }
        if (userListActive) {
            dispatch(getUsers());
        }
    }, [roomId, userListActive]);

    return (
        <Fragment>
            <Navigation />
            <div className="c-chat__container">
                <div className="c-chat__box">
                    {renderChatLeft(
                        chatState,
                        dispatch,
                        userId,
                        handleUserListActive,
                    )}
                    {renderChatMsgSection(
                        chatState,
                        userId,
                        message,
                        handleMessage,
                        dispatch,
                        userListActive,
                        handleUserListActive,
                    )}
                </div>
            </div>
        </Fragment>
    );
};

export default Chats;
