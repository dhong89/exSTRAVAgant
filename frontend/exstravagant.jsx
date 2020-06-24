import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './root';

///TESTING
import {signUp, login, logout} from './util/session';
///TESTING


document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: {
                id: window.currentUser.id
            },
            entities: {
                users: { [window.currentUser.id]: window.currentUser },
            },
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    
    const root = document.getElementById('root');

    ///TESTING START
    window.signUp = signUp;
    window.login = login;
    window.logout = logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch; 
    ///TESTING END

    ReactDOM.render( <Root store={store} />, root)
})
