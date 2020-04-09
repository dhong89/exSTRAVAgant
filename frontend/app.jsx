import React from "react";
import HomePageContainer from './components/homepage/homepage_container';
import {Route} from 'react-router-dom';
import LoginFormContainer from './components/session_form/login_form_container';
import SignupFormContainer from './components/session_form/signup_form_container';
import DashBoard from './components/dashboard/dashboard';
import RouteIndex from './components/routes/route_index';

const App = () => (
    <div>
        <Route exact path='/' component={HomePageContainer} />
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
        <Route path='/dashboard' component={DashBoard} />
        <Route  path='/athlete/routes' component={RouteIndex} /> 
     </div>
);

export default App;