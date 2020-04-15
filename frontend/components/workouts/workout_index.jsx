import React from 'react';
import {Link} from 'react-router-dom';


class WorkoutIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        debugger;
        this.props.fetchWorkouts();
    }


    render (){
        const Lis = this.props.workouts.map((workout) => (
            <tr>
                <th>{workout.sport}</th>
                <th>{workout.title}</th>
                <th>{workout.date}</th>
                <th>{workout.time}</th>
                <th>{workout.distance}</th>
          
            </tr>
            ))


        return (
            <div>
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
                   
                   
                    <button className='log-out-btn' onClick={() => this.props.logout()}>Log Out</button>
                    
                
                
                </div>


                <div className='workout-nav'>
                    
                    <h1 className='workout-header'>
                        My Workouts
                    </h1>

                    <div className='new-workout-link'>
                        <Link to={'/workouts/new'}>Create New Workout</Link>
                    </div>

                </div>


                <div className='workout-list-container'>

                    <div className='height-div'>

                        <table className="customers">

                            <thead>
                                    <tr>

                                            <th>Sport</th>
                                            <th>Title</th>
                                            <th>Date</th>
                                            <th>Time</th>
                                            <th>Distance</th>
                                             
                                    </tr>
                            </thead>
                   
                                    <tbody>
                                        {Lis}
                                    </tbody>

                        </table>
                    </div>
                </div>

                <div className='divider'></div>
           

                <div className='workout-footer'>
                    <div className='divider'></div>
                    <div className='main-logo-div-white'>
                        <img className='main-logo' src={window.main_logo_white} alt="main-logo" />
                    </div>
                    <div className='divider'></div>
                    <div className='copyright'>© 2020 exSTRAVAgant</div>
                </div>

            </div>
        )
    
    }


}

export default WorkoutIndex;