import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import routesReducer from './routes_reducer';
import workoutsReducer from './workouts_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    routes: routesReducer,
    workouts: workoutsReducer
});

export default entitiesReducer;