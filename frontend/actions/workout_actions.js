import * as APIUtil from '../util/workout';

export const RECEIVE_ALL_WORKOUTS = 'RECEIVE_ALL_WORKOUTS';
export const RECEIVE_WORKOUT = 'RECEIVE_WORKOUT';
export const REMOVE_WORKOUT = 'REMOVE_WORKOUT';


export const receiveAllWorkouts = (workouts) => ({
    type: RECEIVE_ALL_WORKOUTS,
    workouts: workouts
})

export const receiveWorkout = (workout) => ({
    type: RECEIVE_WORKOUT,
    workout: workout
})

export const removeWorkout = (workoutId) => ({
    type: REMOVE_WORKOUT,
    workoutId: workoutId
})


export const fetchWorkouts = () => dispatch => {
    return APIUtil.fetchWorkouts()
        .then( (workouts) => dispatch(receiveAllWorkouts(workouts)))
}

export const fetchWorkout = (workoutId) => dispatch => {
    return APIUtil.fetchWorkout(workoutId)
        .then( (workout) => dispatch(receiveWorkout(workout)))
}

export const createWorkout = (workout) => dispatch => {
    return APIUtil.createWorkout(workout)
            .then( (workout) => {
                return dispatch(receiveWorkout(workout))
            })
}

export const updateWorkout = (workout) => dispatch => {
    return APIUtil.updateWorkout(workout)
        .then( (workout) => dispatch(fetchWorkout(workout)))
}

export const deleteWorkout = (workoutId) => dispatch => {
    return APIUtil.deleteWorkout(workoutId)
        .then( () => dispatch(removeWorkout(workoutId)))
}
