import { connect } from 'react-redux';
import NewWorkoutForm from './new_workout_form';
import { createWorkout, fetchWorkout } from '../../actions/workout_actions';
import { logout } from '../../actions/session_actions';


const mstp = (state) => {
    return state;
}

const mdtp = dispatch => {
    return ({
        logout: () => dispatch(logout()),
        fetchworkout: workoutId => dispatch(fetchWorkout(workoutId)),
        createWorkout: workout => dispatch(createWorkout(workout)),
    })
}

export default connect(mstp, mdtp)(NewWorkoutForm);