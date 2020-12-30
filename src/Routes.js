import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Pages/Home'
import FirebasePushNotification from "./Pages/FirebasePushNotification";
import GoogleAuthentication from "./Pages/GoogleAuthentication";
import FirebaseRealtimeDatabase from "./Pages/FirebaseRealtimeDatabase";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch> 
                <Route exact path='/' component={Home} />
                <Route exact path='/FirebasePushNotification' component={FirebasePushNotification} />
                <Route exact path='/GoogleAuthentication' component={GoogleAuthentication} />
                <Route exact path='/FirebaseRealtimeDatabase' component={FirebaseRealtimeDatabase} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;