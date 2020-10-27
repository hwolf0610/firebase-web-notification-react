import firebase from 'firebase/app';
import 'firebase/messaging';

const config = {
  apiKey: 'AIzaSyCsNVwaL-WJQbPwAzFQkSyX8wJFrLtdBT8',
  authDomain: 'fir-notification-react.firebaseapp.com',
  databaseURL: 'https://fir-notification-react.firebaseio.com',
  projectId: 'fir-notification-react',
  storageBucket: 'fir-notification-react.appspot.com',
  messagingSenderId: '818782419052',
  appId: '1:818782419052:web:bf221642ff6235d59bc049',
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

export const requestFirebaseNotificationPermission = () =>
  new Promise((resolve, reject) => {
    messaging
      .requestPermission()
      .then(() => messaging.getToken())
      .then((firebaseToken) => {
        resolve(firebaseToken);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
