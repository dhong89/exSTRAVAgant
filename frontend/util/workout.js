export const fetchWorkouts = () => (
    $.ajax({
        url: '/api/workouts',
        method: 'GET'
    })
)

export const fetchWorkout = (workoutId) => (
    $.ajax({
        url: `/api/workouts/${workoutId}`,
        method: 'GET'
    })
)

export const createWorkout = (workout) => (
    $.ajax({
        url: '/api/workouts',
        method: 'POST',
        data: { workout: workout}
    })
)

export const updateWorkout = (workout) => (
    $.ajax({
        url: `/api/workouts/${workout.id}`,
        method: 'PATCH',
        data: { workout: workout}
    })
)

export const deleteWorkout = (workoutId) => (
    $.ajax({
        url: `/api/workouts/${workout.id}`,
        method: 'DELETE'
    })
)