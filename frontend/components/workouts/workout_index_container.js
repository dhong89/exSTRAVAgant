import { connect } from 'react-redux';
import WorkoutIndex from './workout_index';
import { fetchWorkouts}  from '../../actions/workout_actions';
import { logout } from '../../actions/session_actions';


const mSTP = (state) => {
    return ({
        users: state.entities.users,
        session: state.session,
        workouts: Object.values(state.entities.workouts)
    })
}


const mDTP = dispatch => {
    return ({
        logout: () => dispatch(logout()),
        fetchWorkouts: () => dispatch(fetchWorkouts())
    })
}

export default connect(mSTP, mDTP)(WorkoutIndex);