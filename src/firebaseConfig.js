import firebase from 'firebase';
import 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAT_GEqa0pJmctIFQlVJ6psD3n9SlG1XZg',
	authDomain: 'health-e-api.firebaseapp.com',
	databaseURL: 'https://health-e-api.firebaseio.com',
	projectId: 'health-e-api',
	storageBucket: 'health-e-api.appspot.com',
	messagingSenderId: '28104524620',
	appId: '1:28104524620:web:fd7ee5dcbc0fffa86d45e9',
	measurementId: 'G-TL13K7D32X',
};

firebase.initializeApp(firebaseConfig);

// const firebaseDB = firebase.database();
// const firebaseTopics = firebaseDB.ref('topics');

// export { firebase, firebaseDB, firebaseTopics };

const firebaseDB = firebase.firestore();
const firebaseTopics = firebaseDB.collection('topics');

// const getMarker = async () => {
// 	let info;

// 	const snapshot = await firebase
// 		.firestore()
// 		.collection('topics')
// 		.get();

// 	info = snapshot.docs.map(doc => doc.data());
// 	console.lgo(info);
// };
// getMarker();

export { firebase, firebaseDB, firebaseTopics };
