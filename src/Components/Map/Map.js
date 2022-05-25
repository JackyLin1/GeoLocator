import React from 'react';
import './Map.css';
import { GoogleMap, Marker} from '@react-google-maps/api';

const containerStyle = {
  height: "400px",
  width: "800px"
};

const center = {
  lat: 49.2827,
  lng: -123.1207
};

export default function Map (props) {

  if (props.loadError) {
    return <div>Map Cannot be loaded right now (check Google map API)</div>
  }

    return props.isLoaded ? (
    <div>
      <GoogleMap
      id="searchbox-example"
      mapContainerStyle={containerStyle}
      zoom={10}
      center={center}
      > 
      </GoogleMap>
    
    </div>
    ) : props.loadError

}