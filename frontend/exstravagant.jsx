import React from 'react';
import ReactDOM from 'react-dom';
import {signup, login, logout} from './util/session';



document.addEventListener("DOMContentLoaded", () => {

    window.signup = signup;
    window.login = login;
    window.logout = logout;

    const root = document.getElementById('root');

    ReactDOM.render( <h1>Welcome to exSTRAVAgant!</h1>, root)
})
