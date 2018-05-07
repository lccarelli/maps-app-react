import React, { Component } from 'react';
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';

const google = window.google;

class Map extends Component {
  constructor (props) {
    super(props);
    this.state = {
      markers: this.props.markers
    }
  }
  render() {
    const MyMapComponent = withGoogleMap((props) =>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{lat: -34.6843063, lng: -58.3545779 }}
        defaultTitle="Mapa">
        {/*Todo markets*/}
      </GoogleMap>

    );
    return (
      <MyMapComponent
        loadingElement={<div style={{height: '100%'}}/>}
        containerElement={<div style={{height: '70vh'}}/>}
        mapElement={<div style={{height:'100%'}}/>}
      />

    );
  }
}

export default Map;
