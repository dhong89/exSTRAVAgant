import React from 'react';
import { Link } from 'react-router-dom';3

class Map extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            route_name: '',
            distance: '',
            elevation: Math.floor((Math.random() * 500) + 1),
            estimated_move_time: '3:20',
            athlete_id: this.props.session.id,
            transportation: 'RUNNING',
            image_url: ''
        }

        this.points = [];
      

        this.addMarker = this.addMarker.bind(this);
        this.addPoints = this.addPoints.bind(this);
        this.displayRoutes = this.displayRoutes.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.createUrl = this.createUrl.bind(this);
        this.calculateTotalDistance = this.calculateTotalDistance.bind(this);
        // this.clearRoute = this.clearRoute.bind(this);
        this.listenForClick = this.listenForClick.bind(this);
        this.listenForDirectionsChanged = this.listenForDirectionsChanged.bind(this);
    }


    componentDidMount() {
 
        const mapOptions = {
            center: { lat: 40.734902, lng: -73.991006 }, 
            zoom: 17,
    
        };

        // this.evelationService = new google.maps.ElevationService();
        this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer({
            draggable: true,
            map: this.map
        });
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.directionsRenderer.setMap(this.map)
        
        this.listenForClick();
        this.listenForDirectionsChanged();
    }

    createUrl(directions) {
        const route = directions.routes[0];
        const overviewPath = route.overview_path;
        let image_url = `https://maps.googleapis.com/maps/api/staticmap?size=300x180&markers=label:S%7C${overviewPath[0].lat()},${overviewPath[0].lng()}&markers=label:E%7C${overviewPath[overviewPath.length - 1].lat()},${overviewPath[overviewPath.length - 1].lng()}`;
        const pathColorUrl = `&path=color:0x0000ff80|weight:2|`// this works blue
        const overviewPolyline = `enc:${route.overview_polyline}`;
        const key = `&key=${window.key}`;
        image_url += pathColorUrl + overviewPolyline + key;

        this.setState({
            image_url: image_url
        });
    }

    addMarker(){

        const last = this.points[this.points.length - 1];
        const position = {
            lat: last.location.lat(),
            lng: last.location.lng()
        }
   
        this.marker = new google.maps.Marker({
            position: position
        });
        
        this.marker.setMap(this.map);
        this.displayRoutes();

    }

    displayRoutes () {
        let midPoints = this.points.slice(1, this.points.length)
       
        this.directionsService.route({
            origin: this.points[0].location,
            waypoints: midPoints.map(mark => ({ location: mark.location })),
            destination: this.points[this.points.length - 1].location,
            travelMode: 'WALKING'
        }, (response, status) => {
            if (status == 'OK') {
                this.directionsRenderer.setDirections(response);
            }
        })
    }

    calculateTotalDistance(directions){
        let total = 0;
        let currentRoute = directions.routes[0];
        for (let i = 0; i < currentRoute.legs.length; i++) {
            total += currentRoute.legs[i].distance.value;
        }

        let distanceInMiles = parseFloat((total / 1609.34).toFixed(2))
        total = distanceInMiles;
        this.state.distance = total;

        document.getElementsByClassName('total-distance').innerHTML = total + ' mi';
    }

    addPoints(location) {

        this.points.push({
            location: location,
            stopover: false
        })
    }

    listenForClick(){
        this.map.addListener('click', (e) => {
            this.addPoints(e.latLng);
            this.addMarker();
            this.displayRoutes();
        })
    }

    // clearRoute(){
    //     this.points = [];
    //     this.directionsRenderer.setMap(null);
    //     this.marker.setMap(null);

    // }



    listenForDirectionsChanged(){
        
        this.directionsRenderer.addListener('directions_changed', () => {
            const directions = this.directionsRenderer.getDirections()
            // const elevation = this.elevationService

            if (directions !== null) {
                // elevation.getElevationAlongPath({
                //     path: this.points, /////need actual lat long values.Objects key of lat and long. Array of objects. 
                //     samples: 5
                // }, (elavation_array) => {
                //     ///method that takes in an elvations array . Each element in the array can call .elevation which returns a value. this.setState to elvation the result of elevations_array[i].elevation
             
             
                // })
                this.createUrl(directions);
                this.calculateTotalDistance(directions);
            }
        })
    }

        handleSubmit(e) {
            e.preventDefault();
            // debugger
            const route = Object.assign({}, this.state)
            this.props.createRoute(route).then(
                () => this.props.history.push("/routes")
            )
        }

        update(field) {
            return (e) => this.setState({
                [field]: e.currentTarget.value
            })
        }



    render() {
        // debugger
        return (
                <>
                    <div className='navbar-map'>
                        <div className='main-logo-div-map'>
                            <img className='main-logo-map' src={window.main_logo_orange} alt="main-logo" />
                        </div>

                        <span className='route-builder'>ROUTE BUILDER</span>

                        <span className='exit-builder-link'>
                            <Link to={'/routes'}>Exit Builder</Link>
                        </span>
                    </div>

                    <form onSubmit={this.handleSubmit}>
                       
                       <div className='input-container'>
                            <input  
                                    className='input-new-route'
                                    type="text" 
                                    onChange={this.update('route_name')}
                                    placeholder="route name" 
                                    value={this.state.route_name}/>

                            <div className='save-route-link'>
                                <input type="submit" value="Save Route"/>
                            </div>

                        </div>  

                    </form>

                    
                    <div className='map-render' ref={map => this.mapNode = map}> 
                    </div>

                    <div className='total-distance'></div>
                </>
        );
    }
}

export default Map;

