import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div>
                
                <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/FirebasePushNotification">FirebasePushNotification</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/GoogleAuthentication">GoogleAuthentication</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/FirebaseRealtimeDatabase">FirebaseRealtimeDatabase</Link>&nbsp;&nbsp;&nbsp;
            </div>
        );
    }
}

export default Home;