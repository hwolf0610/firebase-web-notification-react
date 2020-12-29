import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PushMessaging from "./Firebase_Message/PushMessaging";
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch> 
                <Route exact path='/' component={PushMessaging} />
                <Route exact path='/PushMessaging' component={PushMessaging} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;