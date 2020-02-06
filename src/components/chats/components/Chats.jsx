/* eslint-disable prefer-destructuring */
/* eslint-disable max-lines-per-function */
import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Navigation } from '../../Navigation';
import noUserImg from '../../../assets/img/no-user.svg';
import { pageData } from '../constants';
import {
    firebaseMessages,
    firebaseChatNotifications,
} from '../../../firebaseConfig';
import {
    changeRoom,
    setMessages,
    sendMessage,
    getUsers,
    addUser,
} from '../actions';

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
const renderChatList = (chatState, dispatch, userId) =>
    chatState.rooms.map((el, i) => (
        <div
            className={`c-chat__inboxChatList ${
                chatState.currentRoom === el.roomId ? '--chatActive' : ''
            }`}
            key={i}
            onClick={() => dispatch(changeRoom(el.roomId))}
        >
            {console.log(el)}
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

const renderChatLeft = (chatState, dispatch, userId, handleUserListActive) => {
    const { rooms, newUser } = chatState;
    return (
        <div className="c-chat__inbox">
            <div className="c-chat__inboxHead">
                <div>{pageData.recentText}</div>
                <div
                    className="c-chat__inboxNew"
                    onClick={handleUserListActive}
                >
                    new
                </div>
            </div>
            <div className="c-chat__inboxChats">
                {newUser ? (
                    <div className="c-chat__inboxChatList --chatActive">
                        <img
                            src={newUser.imageUrl}
                            alt=""
                            className="c-chat__userImage"
                        />
                        <div className="c-chat__info">
                            <div className="c-chat__userName">
                                {newUser.fullName}
                            </div>
                            <div className="c-chat__chatText">
                                {newUser.email}
                            </div>
                        </div>
                    </div>
                ) : null}
                {chatState.rooms.length > 0
                    ? renderChatList(chatState, dispatch, userId)
                    : null}
            </div>
        </div>
    );
};

const createNewRoom = (dispatch, user, handleUserListActive) => {
    dispatch(addUser(user));
    handleUserListActive();
};

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
            <div
                className="c-chat__userChatList"
                key={user.userId}
                onClick={() =>
                    createNewRoom(dispatch, user, handleUserListActive)
                }
            >
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

const handleSubmit = (
    e,
    message,
    dispatch,
    chatState,
    userId,
    clearMessage,
) => {
    e.preventDefault();
    let recieverId;
    if (!(chatState.messages.length > 0)) {
        recieverId = chatState.newUser.userId;
    } else {
        recieverId =
            chatState.messages[0].reciever === userId
                ? chatState.messages[0].sender
                : chatState.messages[0].reciever;
    }

    if (message) {
        dispatch(sendMessage(message, recieverId));
        clearMessage();
    }
};

const renderChatSend = (
    message,
    handleMessage,
    dispatch,
    chatState,
    userId,
    clearMessage,
) => (
    <div className="c-chat__chatSend">
        <form
            className="f-postCard__bottom"
            onSubmit={e =>
                handleSubmit(
                    e,
                    message,
                    dispatch,
                    chatState,
                    userId,
                    clearMessage,
                )
            }
        >
            <input
                type="text"
                className="f-postCard__input"
                placeholder="Write a comment"
                value={message}
                onChange={handleMessage}
            />
            {message ? (
                <Button variant="contained" className="b-button" type="submit">
                    {pageData.send}
                </Button>
            ) : null}
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
    clearMessage,
    roomId,
) => {
    const currentRoom = chatState.rooms.filter(el => el.roomId === roomId);
    let currentDetail;
    if (currentRoom.length === 1) {
        currentDetail = currentRoom[0].attributes[0];
    } else currentDetail = null;

    return (
        <div className="c-chat__msgs">
            {currentDetail ? (
                <div className="c-chat__msgHead">{currentDetail.fullName}</div>
            ) : null}

            <div className="c-chat__msgBody">
                <div className="c-chat__chatMsgs" id="chatMsgs">
                    {roomId.split('').length < 2 ? (
                        <div className="c-chat__noUser">
                            <img src={noUserImg} alt="" />
                            <div className="c-chat__noUser-heading">
                                No user selected yet
                            </div>
                            <div className="c-chat__noUser-desc">
                                click on <span>new</span> and select a user from
                                the list
                            </div>
                        </div>
                    ) : (
                        <div className="c-chat__msgBox">
                            {renderChatBubbles(chatState.messages, userId)}
                        </div>
                    )}

                    {/* <div className="c-chat__msgBox">
                    {renderChatBubbles(chatState.messages, userId)}
                </div> */}
                </div>
                {renderChatUsers(
                    userListActive,
                    handleUserListActive,
                    dispatch,
                    chatState.users,
                )}

                {roomId.split('').length > 2
                    ? renderChatSend(
                          message,
                          handleMessage,
                          dispatch,
                          chatState,
                          userId,
                          clearMessage,
                      )
                    : null}
            </div>
        </div>
    );
};

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

    const clearMessage = () => {
        setMessage('');
    };

    const listenToData = ref => {
        ref.onSnapshot(querySnapshot => {
            const messages = [];
            querySnapshot.forEach(doc => {
                messages.push(doc.data());
            });
            messages
                .sort((a, b) => {
                    a = new Date(a.createdAt);
                    b = new Date(b.createdAt);
                    return a > b ? -1 : a < b ? 1 : 0;
                })
                .reverse();
            const element = document.getElementById('chatMsgs');
            dispatch(setMessages(messages));
            element.scrollTop = element.scrollHeight;
        });
    };

    useEffect(() => {
        listenToData(firebaseRef);
    }, []);

    useEffect(() => {
        if (roomId) {
            if (roomId !== prevRoomId) {
                // firebaseRef.off();
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
                        clearMessage,
                        roomId,
                    )}
                </div>
            </div>
        </Fragment>
    );
};

export default Chats;
