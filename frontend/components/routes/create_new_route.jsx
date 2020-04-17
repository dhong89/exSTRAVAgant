import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper, Polyline} from 'google-maps-react';

 
class MapContainer extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const triangleCoords = [
            { lat: 25.774, lng: -80.190 },
            { lat: 18.466, lng: -66.118 },
            { lat: 32.321, lng: -64.757 },
            { lat: 25.774, lng: -80.190 }
        ];

        return (
            <Map google={this.props.google}
                style={{ width: '100%', height: '100%', position: 'relative' }}
                className={'map'}
                zoom={14}>
                <Polyline
                    paths={triangleCoords}
                    strokeColor="#0000FF"
                    strokeOpacity={0.8}
                    strokeWeight={2} />
            </Map>
        )
    }
}

export default MapContainer;
// export default GoogleApiWrapper({
//     apiKey: (AIzaSyBukEF_3yOYk6AJV3F8PlGze__SamMtBfA)
// })(MapContainer)