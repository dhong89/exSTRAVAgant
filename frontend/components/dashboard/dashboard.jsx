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
                        <th>Est Move Time</th>
                        <th>Sport</th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <th><Link to={`/routes/${route.id}`}> {route.route_name}</Link></th>
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
           

                <div className='dash-about-me'>

                    <a href="https://dhong89.github.io/" target='blank'>
                        <i class="fab fa-chrome"></i>
                    </a>
                    <a href="https://github.com/dhong89/exSTRAVAgant" target='blank'>
                        <i className="fab fa-github-square" ></i>
                    </a>

                    <a href="https://www.linkedin.com/in/david-hong-53a8b768/" target='blank'>
                        <i className="fab fa-linkedin" ></i>
                    </a>
                    <a href="https://angel.co/u/david-hong-32" target='blank'>
                        <i class="fab fa-angellist"></i>
                    </a>
                </div>
            </div>



            <div className='background-container'>
                <div className='profile-body-container'>
                    <div className='user-profile-container'>

                        <div className='profile-picture'>
                                <img className='profile' src={window.profile_picture} alt="dashboard" />
                        </div>

                        <div className='user-profile'>
                    
                            <span className='welcome-message'>
                                {this.props.users[this.props.currentUser].username}
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