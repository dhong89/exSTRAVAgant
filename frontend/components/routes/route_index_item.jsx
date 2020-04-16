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

                <h1 className='route-header'>My Routes</h1>

                <Link to={'/map'}>Create New Route</Link>

                <div className='route-container'>
                    <button onClick={() => this.props.deleteRoute(route.id)}>X</button>

                    
                    <h1 className="route-name">
                        <Link to={`/api/routes/${route.id}`}>{route.route_name}</Link>
                    </h1>

                    <div>
                        {route.distance}
                    </div>


                </div>
            </div>

 
        )
    }
}

export default RouteIndexItem;