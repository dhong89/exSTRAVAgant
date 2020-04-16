// import { Map, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';

class Map extends React.Component {
    constructor(props){
        super(props);

        this.points = [];
      

        this.addMarker = this.addMarker.bind(this);
        this.addPoints = this.addPoints.bind(this);
        this.displayRoutes = this.displayRoutes.bind(this);
   
    }



    componentDidMount() {
 
        const mapOptions = {
            center: { lat: 40.734902, lng: -73.991006 }, 
            zoom: 15
        };

        this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer({
            draggable: true,
            map: this.map
        });
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.directionsRenderer.setMap(this.map)
        
        this.listenForClick();


    }

    addMarker(){
        // if (!this.points.slice(0, this.points.length - 1).includes(this.points[this.points.length - 1])){
        //     new google.maps.Marker({
        //     position: this.points[this.points.length - 1],
        //     map: this.map,
        //     title: 'Hello World!'
        //     });
        // }
        const last = this.points[this.points.length - 1];
        const position = {
            lat: last.location.lat(),
            lng: last.location.lng()
        }
        // debugger
        let marker = new google.maps.Marker({
            position: position
        });
        
        marker.setMap(this.map);

        //Below  filter function just removes duplicate 'clicks' on the map//
        // this.points = this.points.filter((point, index) => this.points.indexOf(point) === index)
    }

    addPoints(location){
        // debugger
        this.points.push({
            location: location,
            stopover: false
        })
    }

    displayRoutes () {
        let midPoints = this.points.slice(1, this.points.length)
       
        console.log(midPoints);
       
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

    listenForClick(){
        this.map.addListener('click', (e) => {
            this.addPoints(e.latLng);
            this.addMarker();
            this.displayRoutes();
        })
    }




    render() {
        return (
                <div className='map-render' ref={map => this.mapNode = map}> 
                </div>

        );
    }
}

export default Map;

