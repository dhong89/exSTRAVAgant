import React from 'react';
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
            <div>
                {indexLi}
            </div>
        )
    }
}

export default RouteIndex;