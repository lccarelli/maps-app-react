import React, { Component } from 'react';
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';

const google = window.google;

class Map extends Component {
  construtor () {
    super();
  }
  render {
    const MyMapComponent = withGoogleMap((props) => {
      <GoogleMap
        defaultZoom={15}
        position={{lat: -34.6843063, lng: -58.3545779 }}
        defaultTitle="Mapa">

      </GoogleMap>

    })
    return (


    );
  }
}

export default Map;
