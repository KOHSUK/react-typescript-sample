import React, { useState, useEffect, ReactNode, ReactChildren } from 'react';
import Login from './Login';

type authProps = {
    children: ReactNode,
}

export type loginEvent = {
    authState: string,
}

function Auth(props: authProps) {
    const [authState, setAuthState] = useState("loggedOut");

    const loggedIn = authState === "loggedIn";

    const handleLogin = (e: loginEvent) => {
        setAuthState(e.authState);
    }

    return (
        <>
            {
                (!loggedIn)
                ?
                <Login onLogin={(e: loginEvent) => {handleLogin(e)}}/>
                :
                <div>
                    {props.children}
                </div>
            }
        </>
    )
}

export default Auth;