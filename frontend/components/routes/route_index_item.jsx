import React from 'react';
import { Link } from 'react-router-dom';
import RouteShowContainer from './route_show_container';

class RouteIndexItem extends React.Component {
    constructor(props){
        super(props);
    }

    render () {
        const {route} = this.props
    
        return (

            <div className="main-container-routes">




                <div className='route-container'>
                    <button className='x-btn' onClick={() => this.props.deleteRoute(route.id)}>X</button>

                    
                    <h1 className="route-name">
                        {/* <RouteShowContainer routeId={route.id}/> */}
                        <Link to={`/routes/${route.id}`}> {route.route_name}</Link>
                    </h1>

                        <img src={route.image_url}  alt='broke_image' />


                    <div className='route-distance'>
                       Distance: {route.distance} miles
                    </div>

                    <div className='route-elevation'>
                        Elevation: {route.elevation} feet
                    </div>

                   

                </div>
            </div>

 
        )
    }
}

export default RouteIndexItem;