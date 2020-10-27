import axios from 'axios';
import React, { Fragment } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.scss';
import { Messaging } from './Messaging';
import { requestFirebaseNotificationPermission } from './firebaseInit';

axios.defaults.baseURL = 'http://localhost:3001/v1';

const App = () => {
  requestFirebaseNotificationPermission()
    .then((firebaseToken) => {
      // eslint-disable-next-line no-console
      console.log(firebaseToken);
    })
    .catch((err) => {
      return err;
    });

  return (
    <Fragment>
      <ToastContainer autoClose={2000} position="top-center" />
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">
          Firebase notifictations with React and Express
        </Navbar.Brand>
      </Navbar>

      <Container className="center-column">
        <Row>
          <Col>
            <Messaging />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default App;




// ----------FrontEnd-----------
// < !--The core Firebase JS SDK is always required and must be listed first-- >
// <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js"></script>

// <!--TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-analytics.js"></script>

// <script>
//     // Your web app's Firebase configuration
//     // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyCsNVwaL-WJQbPwAzFQkSyX8wJFrLtdBT8",
//     authDomain: "fir-notification-react.firebaseapp.com",
//     databaseURL: "https://fir-notification-react.firebaseio.com",
//     projectId: "fir-notification-react",
//     storageBucket: "fir-notification-react.appspot.com",
//     messagingSenderId: "818782419052",
//     appId: "1:818782419052:web:bf221642ff6235d59bc049",
//     measurementId: "G-3SJBREYZXD"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>



// ---Backend----------

// var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://fir-notification-react.firebaseio.com"
// });
