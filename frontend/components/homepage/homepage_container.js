import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import HomePage from './homepage';

const mSTP = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mDTP = dispatch => ({
    processForm: (user) => dispatch(login(user))
});

export default connect(mSTP, mDTP)(HomePage);