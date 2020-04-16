import React from 'react';
import { Link } from 'react-router-dom';
import RouteIndexItem from './route_index_item';


class RouteIndex extends React.Component {
    constructor(props){
        super(props);
        
 
    }

    componentDidMount(){
        this.props.fetchUserRoutes();
    }


    render() {
  
        const indexLi = this.props.routes.map((route) => (
            <RouteIndexItem
                key={`{route.route_name}-${route.id}`}
                route={route}
                deleteRoute={this.props.deleteRoute}
            />
        ))

        return (
            <>

            <div className='navbar'>
                <div className='main-logo-div-workout'>
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


            <div>
                {indexLi}
            </div>

            </>
        )
    }
}

export default RouteIndex;