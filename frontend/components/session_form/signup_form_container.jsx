import {connect} from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';
import { signUp } from '../../actions/session_actions';
import SessionForm from './session_form';


const mSTP = (state) => ({
    user: {
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        password: '',
        email: ''
    },
    formType: 'Create Account',
    navLink: <Link to="/login">log in</Link>
})

const mDTP = dispatch => ({
        processForm: (user) => dispatch(signUp(user)),
});


export default connect(mSTP, mDTP)(SessionForm);