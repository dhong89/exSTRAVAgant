import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchWorkouts } from '../../actions/workout_actions';
import { fetchUser } from '../../actions/user_actions';

const mSTP = (state) => ({
    users: state.entities.users,
    currentUser: state.session.id,
    workouts: Object.values(state.entities.workouts),
})

const mDTP = dispatch => ({
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchWorkouts: () => dispatch(fetchWorkouts()),
})

export default connect(mSTP, mDTP)(Dashboard);