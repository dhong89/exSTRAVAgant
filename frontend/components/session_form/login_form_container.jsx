import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, resetErrors } from '../../actions/session_actions';
import SessionForm from './session_form';


const mSTP = ({ errors }) => ({
    user: {
        username: '',
        password: '',
    },
    errors: errors.session,
    processForm: 'Login',
    navLink: <Link to="/signup">sign up</Link>
});

const mDTP = dispatch => ({
    processForm: (user) => dispatch(login(user)),
    resetErrors: () => dispatch(resetErrors())
});


export default connect(mSTP, mDTP)(SessionForm);