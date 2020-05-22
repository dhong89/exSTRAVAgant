import React from 'react';
import { Link } from 'react-router-dom';

class RouteShow extends React.Component{
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        // debugger
        this.props.fetchRoute(this.props.match.params.routeId);
    }

    render(){
        const route = this.props.route
       
        if (route.length > 0) {
            return (
              <div className="route-show-container">
                <div className="navbar">
                  <div className="main-logo-div-workout">
                    <Link to="/">
                      <img
                        className="main-logo"
                        src={window.main_logo_orange}
                        alt="main-logo"
                      />
                    </Link>
                  </div>

                  <div className="link-backs">
                    <div className="dashboard-link">
                      <Link to={"/dashboard"}>Dashboard</Link>
                    </div>

                    <div className="dashboard-link">
                      <Link to={"/routes"}>Routes</Link>
                    </div>

                    <div className="workout-link">
                      <Link to={"/workouts"}>Workouts</Link>
                    </div>
                  </div>

                  <button
                    className="log-out-btn"
                    onClick={() => this.props.logout()}
                  >
                    Log Out
                  </button>
                </div>

                <div className='route-show-main-container'>

                <div className="route-show-name">{route[0].route_name}</div>

                <div className="route-show-1">
                  <div className="image-container">
                    <img src={route[0].image_url} alt="broke_image" />
                  </div>

              
                <div className='stats-container'>
                <div className='stats-one'>
                  <section>
                    <h2>
                      {route[0].distance} mi
                    </h2>

                    <h3>
                      Distance
                    </h3>
                  </section>

                  <section>
                    <h2>
                      {route[0].elevation} ft
                    </h2>

                    <h3>
                      Elevation
                    </h3>
                  </section>
                </div>

                <div className='stats-two'>
                  <section>
                    <h3>
                      Est. Moving Time: 
                    </h3>

                    <h2>
                      {route[0].estimated_move_time}
                    </h2>
                  </section>

                </div>
                    </div>
                  </div>
              </div>
              </div>
            );
        } else {
            return (
                <div>
                    loading...
                </div>
            )
        }
    }

}

export default RouteShow;