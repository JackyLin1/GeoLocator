import React from 'react';
import './Map.css';
import { GoogleMap, LoadScript, StandaloneSearchBox } from '@react-google-maps/api';

const containerStyle = {
  width: '500px',
  height: '600px'
};

const center = {
  lat: 49.2827,
  lng: -123.1207
};

export default function Map () {

  const api = process.env.REACT_APP_Google_Map_API_Key

  const onLoad = ref => this.searchBox = ref;

  const onPlacesChanged = () => console.log(this.searchBox.getPlaces());


  return (
    <body>
      <LoadScript
      googleMapsApiKey={api}
      >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
     
      </GoogleMap>
    </LoadScript>
    </body>
  ) 
}