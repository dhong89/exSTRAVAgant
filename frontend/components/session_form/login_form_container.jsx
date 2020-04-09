import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, logout } from '../../actions/session_actions';
import SessionForm from './session_form';


const mSTP = (state) => ({
    user: {
        username: '',
        password: '',
    },
    processForm: 'Login',
    navLink: <Link to="/signup">sign up</Link>
});

const mDTP = dispatch => ({
    processForm: (user) => dispatch(login(user)),
    
});


export default connect(mSTP, mDTP)(SessionForm);