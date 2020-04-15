import React from 'react';
import { Link } from 'react-router-dom';

class DashBoard extends React.Component {
    constructor(props){
        super(props);
    }

    // componentDidMount() {
    //     debugger
    //     this.props.fetchWorkouts();
    //     this.props.fetchUser(this.props.currentUser);
    // }


    render (){
        return (
            <>
            <div className='navbar'>
                <div className='main-logo-div'>
                    <img className='main-logo' src={window.main_logo_orange} alt="main-logo" />
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
            </div>

            <div className='profile-body-container'>

                <div className='user-profile-container'>
                    <div className='user-profile'>
                        Demo User
                    </div>
                </div>



                <div className='main-dashboard-body'>
                    <div className='dashboard-banner'>
                        <img className='dashboard' src={window.dashboard_banner} alt="dashboard" />
                    </div>

                </div>
                    
            </div>
            </>
        )
    }
}

export default DashBoard;