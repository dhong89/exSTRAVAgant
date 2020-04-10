import React from "react";
import HomePageContainer from './components/homepage/homepage_container';
import {Route} from 'react-router-dom';
import LoginFormContainer from './components/session_form/login_form_container';
import SignupFormContainer from './components/session_form/signup_form_container';
import DashBoard from './components/dashboard/dashboard'; ////need to import the container
import RouteIndex from './components/routes/route_index'; ///need to import the container
import { AuthRoute, ProtectedRoute} from './util/route_util';

const App = () => (
    <div>
        <AuthRoute exact path='/' component={HomePageContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path='/dashboard' component={DashBoard} />
        <ProtectedRoute path='/athlete/routes' component={RouteIndex} /> 
     </div>
);

export default App;