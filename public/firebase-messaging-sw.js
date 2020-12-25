// [START initialize_firebase_in_sw]
importScripts('https://www.gstatic.com/firebasejs/5.5.9/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.9/firebase-messaging.js');

// messagingSenderId.
firebase.initializeApp({
  'messagingSenderId': '818782419052'
});

// messages.
const messaging = firebase.messaging();
// [END initialize_firebase_in_sw]

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken({vapidKey: 'BGah4hPrb4ir9Cehvo72Q-HBEHctMCKABkQSeKIDA6U-g8ZbZhKvjLdUp95-ObOMbXAARQwu439x_aekLtiaB-w'}).then((currentToken) => {
  if (currentToken) {
    sendTokenToServer(currentToken);
    updateUIForPushEnabled(currentToken);
  } else {
    // Show permission request.
    console.log('No registration token available. Request permission to generate one.');
    // Show permission UI.
    updateUIForPushPermissionRequired();
    setTokenSentToServer(false);
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  showToken('Error retrieving registration token. ', err);
  setTokenSentToServer(false);
});



messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  /*   
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.'
    }; 
  */

  // Customize notification here
  const notificationTitle = payLoad.notification.title;
  const notificationOptions = {
    body: payLoad.notification.body,
    icon: payLoad.notification.icon,
  };

  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});
// [END background_handler]