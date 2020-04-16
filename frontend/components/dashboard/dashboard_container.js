import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchRoutes } from '../../actions/route_actions';
import { fetchUser } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';

const mSTP = (state) => {
    return {
        users: state.entities.users,
        currentUser: state.session.id,
        routes: Object.values(state.entities.routes),
    };
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchRoutes: () => dispatch(fetchRoutes()),
})

export default connect(mSTP, mDTP)(Dashboard);