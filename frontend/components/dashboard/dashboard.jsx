import React from 'react';
import { Link } from 'react-router-dom';

class DashBoard extends React.Component {
    constructor(props){
        super(props);

    }

    componentDidMount() {
        this.props.fetchRoutes();
        this.props.fetchUser(this.props.currentUser);
    
    }

 

    render (){

        const allRoutes = this.props.routes.map( (route) => (
            <table className='customers-1'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Distance</th>
                        <th>Elevation</th>
                        <th>Estimated Move Time</th>
                        <th>Sport</th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <th>{route.route_name}</th>
                        <th>{route.distance}</th>
                        <th>{route.elevation}</th>
                        <th>{route.estimated_move_time}</th>
                        <th>{route.transportation}</th>
                    
                    </tr>
                </tbody>
            </table>
        ))

        return (
    
            <>
            <div className='navbar'>
                <div className='main-logo-div-dash'>
                        <Link to="/"><img className='main-logo' src={window.main_logo_orange} alt="main-logo" /></Link>
                </div>


                <div className='link-backs'>
                    <div className='dashboard-link'>
                        <Link to={'/dashboard'}>Dashboard</Link>
                    </div>

                    <div className='dashboard-link'>
                        <Link to={'/routes'}>Routes</Link>
                    </div>

                    <div className='workout-link'>
                        <Link to={'/workouts'}>Workouts</Link>
                    </div>
                </div>

                <button className='log-out-btn-dash' onClick={() => this.props.logout()}>Log Out</button>
            </div>

            <div className='background-container'>
                <div className='profile-body-container'>

                    <div className='user-profile-container'>

                        <div className='profile-picture'>
                                <img className='profile' src={window.profile_picture} alt="dashboard" />
                        </div>

                        <div className='user-profile'>
                    
                            <span className='welcome-message'>
                                    Welcome back, {this.props.users[this.props.currentUser].username}!
                            </span> 
                            
                        </div>
                    </div>



                    <div className='main-dashboard-body'>
                        <div className='dashboard-banner'>
                            <img className='dashboard' src={window.dashboard_banner} alt="dashboard" />
                        </div>

                        <div className='height-div-1'>
                            <table className="customers-1">

                                        {allRoutes}

                             
                              
                            </table>
                        </div>

                    </div>
                </div>    
                </div>
            </>
        )
    }
}

export default DashBoard;