import admin from 'firebase-admin';

import { googleApplicationCredentials } from './settings';

const serviceAccount = require(googleApplicationCredentials);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://fir-notification-react.firebaseio.com',
});

export const messaging = admin.messaging();
