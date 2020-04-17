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

                    {/* <img src="{`https://maps.googleapis.com/maps/api/staticmap?size = 400x400& center=40.737102,-73.990318 & zoom=11 & path=color:0x0000ff|weight:5|40.737102,-73.990318|40.749825,-73.987963|40.752946,-73.987384|40.755823,-73.986397 & key=${Rails.application.credentials.MAPS_API_KEY}`}" alt=""/> */}

            </div>

                <div className='routes-container'>

                <div className='routes-second-nav'>
                        
                    <h1 className='route-header'>My Routes</h1>


                    <div className='route-logo-'>
                        <img className='route-logo' src={window.routes_show_picture} alt="routes-show-picture" />
                    </div>


                </div>

                    <span className='create-route-link'>
                            <Link to={'/map'}>Create New Route</Link>
                    </span>
               

            <div className='route-items'>
                {indexLi}
            </div>
            </div>
            </>
        )
    }
}

export default RouteIndex;