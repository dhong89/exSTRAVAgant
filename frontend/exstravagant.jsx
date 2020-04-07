import React from 'react';
import ReactDOM from 'react-dom';
import {signUp, login, logout} from './util/session';



document.addEventListener("DOMContentLoaded", () => {

    window.signUp = signUp;
    window.login = login;
    window.logout = logout;

    const root = document.getElementById('root');

    ReactDOM.render( <h1>Welcome to exSTRAVAgant!</h1>, root)
})
