import { RECEIVE_WORKOUT_ERRORS,RESET_WORKOUT_ERRORS } from "../actions/workout_actions";

const workoutErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RESET_WORKOUT_ERRORS:
      return [];
    case RECEIVE_WORKOUT_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default workoutErrorsReducer;
