import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
	measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.firestore();
const firebaseTopics = firebaseDB.collection('topics');
const firebaseNotifications = firebaseDB.collection('notifications');
const firebaseRooms = firebaseDB.collection('rooms');
const firebaseUsers = firebaseDB.collection('users');
const firebaseMessages = firebaseDB.collection('messages');
const firebaseChatNotifications = firebaseDB.collection('messageNotifications');

export {
	firebase,
	firebaseDB,
	firebaseTopics,
	firebaseNotifications,
	firebaseRooms,
	firebaseUsers,
	firebaseMessages,
	firebaseChatNotifications,
};
