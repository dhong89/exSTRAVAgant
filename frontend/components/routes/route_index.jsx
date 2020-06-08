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
                <div className='navbar-container'>
                    <div className='navbar'>
                        <div className='main-logo-div-workout'>
                                <Link to="/"><img className='main-logo' src={window.main_logo_orange} alt="main-logo" /></Link>
                        </div>

                        <div className='link-backs'>
                                <Link to={'/dashboard'}>Dashboard</Link>
                            
                                <Link to={'/routes'}>Routes</Link>
                          
                                <Link to={'/workouts'}>Workouts</Link>
                        </div>

                        <button className='log-out-btn' onClick={() => this.props.logout()}>Log Out</button>
                    
                    {/* <div className='dash-about-me'>

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
                    </div> */}
                </div>

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