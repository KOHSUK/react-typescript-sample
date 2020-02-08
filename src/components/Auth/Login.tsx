import React, { useState,FormEvent, ChangeEvent } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { loginEvent } from './index';
import { login, logout } from '../../lib/Auth/User';

export default function Login(props: any) {

    const [userName, setUserName]: [string | null, any] = useState("");
    const [password, setPassword]: [string | null, any] = useState("");

    const handleChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };

    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const onLogin = (e: FormEvent) => {
        if(props.onLogin) {
            let args: loginEvent;
            if(login(userName, password)){
                 args = {
                    authState: "loggedIn"
                };
            } else {
                args = {
                    authState: "loginDenied"
                };
            }
            console.log(userName);
            console.log(password);
            props.onLogin(args);
        };
    };

    return (
        <form>
            <div>
                <TextField
                    required
                    id="standard-required"
                    label="メールアドレス"
                    onChange={handleChangeUserName}
                />
            </div>
            <div>
                <TextField
                    required
                    id="standard-password-input"
                    type="password"
                    label="パスワード"
                    onChange={handleChangePassword}
                />
            </div>
            <div>
                <Button 
                    variant="contained" 
                    color="primary"
                    onClick={(e) => onLogin(e)}
                >
                OK
                </Button>
            </div>
        </form>
    )
}
