import React from 'react';
import Login from '../GoogleAuthentication/GoogleLogin';
import Logout from '../GoogleAuthentication/GoogleLogout';
import LoginHooks from '../GoogleAuthentication/LoginHooks';
import LogoutHooks from '../GoogleAuthentication/LogoutHooks';

function GoogleAuthentication() {
    return (
        <div>
            <h2>The Components way</h2>
            <Login />
            <br />
            <Logout />
            <h2>The Hooks way</h2>
            <LoginHooks />
            <LogoutHooks />
            <br />
        </div>
    )
}
export default GoogleAuthentication;