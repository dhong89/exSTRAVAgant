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
    APIUtil.fetchWorkouts()
        .then( (workouts) => dispatch(receiveAllWorkouts(workouts)))
}

export const fetchWorkout = (workoutId) => dispatch => {
    APIUtil.fetchWorkout(workoutId)
        .then( (workout) => dispatch(receiveWorkout(workout)))
}

export const createWorkout = (workout) => dispatch => {
    APIUtil.createWorkout(workout)
        .then( (workout) => dispatch(receiveWorkout(workout)))
}

export const updateWorkout = (workout) => dispatch => {
    APIUtil.updateWorkout(workout)
        .then( (workout) => dispatch(fetchWorkout(workout)))
}

export const deleteWorkout = (workoutId) => dispatch => {
    APIUtil.deleteWorkout(workoutId)
        .then( () => dispatch(removeWorkout(workoutId)))
}
