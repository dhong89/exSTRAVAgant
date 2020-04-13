// import { Map, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';

class Map extends React.Component {
    constructor(props){
        super(props);

        this.points = [];
      

        this.addMarker = this.addMarker.bind(this);
        // this.addPolyMarkers = this.addPolyMarkers.bind(this);
    }

    // componentDidUpdate(){
    //     this.addPolyMarkers();
    //     this.state.marker.setMap(this.map);
    // }

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
        if (!this.points.slice(0, this.points.length - 1).includes(this.points[this.points.length - 1])){
            new google.maps.Marker({
            position: this.points[this.points.length - 1],
            map: this.map,
            title: 'Hello World!'
            });
        }

        //Below  filter function just removes duplicate 'clicks' on the map//
        this.points = this.points.filter((point, index) => this.points.indexOf(point) === index)
    }

//     addPolyMarkers(){
//         new google.maps.Polyline({
//             path: this.state.points,
//             geodesic: true,
//             strokeColor: '#FF0000',
//             strokeOpacity: 1.0,
//             strokeWeight: 2
//         });
//     }

// var flightPlanCoordinates = [
//     { lat: 37.772, lng: -122.214 },
//     { lat: 21.291, lng: -157.821 },
//     { lat: -18.142, lng: 178.431 },
//     { lat: -27.467, lng: 153.027 }
// ];
// var flightPath = new google.maps.Polyline({
//     path: flightPlanCoordinates,
//     geodesic: true,
//     strokeColor: '#FF0000',
//     strokeOpacity: 1.0,
//     strokeWeight: 2
// });

// flightPath.setMap(map);

    listenForClick(){
        this.map.addListener('click', (e) => {
            this.points.push(e.latLng);
            this.addMarker();
            console.log(this.points)
            this.directionsService.route({
                origin: this.points[0],
                destination: this.points[this.points.length - 1],
                travelMode: 'WALKING'
            }, (response, status) => {
                if (status == 'OK'){
                   this.directionsRenderer.setDirections(response);
       
                }
            })

        })
    }



    // {
    // origin: LatLng | String | google.maps.Place,
    //     destination: LatLng | String | google.maps.Place,
    //         travelMode: TravelMode
    // }

    render() {
        return (
                <div className='map-render' ref={map => this.mapNode = map}> 
                </div>

        );
    }
}

export default Map;

// document.getElementsByClassName(names)
