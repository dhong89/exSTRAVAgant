import React from "react";
import HomePageContainer from './components/homepage/homepage_container';
import {Route} from 'react-router-dom';
import LoginFormContainer from './components/session_form/login_form_container';
import SignupFormContainer from './components/session_form/signup_form_container';
import RouteIndexContainer from './components/routes/route_index_container'; 
import RouteShowContainer from './components/routes/route_show_container'; 
import { AuthRoute, ProtectedRoute} from './util/route_util';
import DashBoardContainer from './components/dashboard/dashboard_container'; 
import MapContainer from './components/maps/map_container';
import WorkoutIndexContainer from './components/workouts/workout_index_container';
import NewWorkoutContainer from './components/new_workouts_form/new_workout_form_container';



const App = () => (
    <div>
        <AuthRoute exact path='/' component={HomePageContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path='/dashboard' component={DashBoardContainer} />
        <ProtectedRoute path='/routes' component={RouteIndexContainer} /> 
        <ProtectedRoute path='/routes/show' component={RouteShowContainer} /> 
        <ProtectedRoute exact path='/workouts' component={WorkoutIndexContainer} /> 
        <ProtectedRoute exact path='/workouts/new' component={NewWorkoutContainer} /> 


        <Route path='/map' component={MapContainer} />
     </div>
);

export default App;