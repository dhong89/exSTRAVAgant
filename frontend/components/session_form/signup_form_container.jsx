import {connect} from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';
import { signUp, resetErrors } from '../../actions/session_actions';
import SessionForm from './session_form';


const mSTP = ({ errors }) => ({
    user: {
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        password: '',
        email: ''
    },
    errors: errors.session,
    formType: 'Create Account',
    navLink: <Link to="/login">log in</Link>
})

const mDTP = dispatch => ({
        processForm: (user) => dispatch(signUp(user)),
        resetErrors: () => dispatch(resetErrors())
});


export default connect(mSTP, mDTP)(SessionForm);