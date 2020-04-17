import React from 'react';
import { Link } from 'react-router-dom';

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
                        <Link to={`/api/routes/${route.id}`}>{route.route_name}</Link>
                    </h1>

                        <img src={route.image_url}  alt='broke_image' />

                    <div>
                       Distance: {route.distance} miles
                    </div>

                    <div>
                        Elevation: {route.elevation} feet
                    </div>


                </div>
            </div>

 
        )
    }
}

export default RouteIndexItem;