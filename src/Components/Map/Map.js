import React from 'react';
import './Map.css';
import { GoogleMap, Marker} from '@react-google-maps/api';

const containerStyle = {
  height: "400px",
  width: "800px"
};

export default function Map (props) {
  
  const [map, setMap] = React.useState(null)
  
  const onLoad = React.useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    setMap(map)
  }, [])

  const parsedMarkers =  props.history.map (entry => <Marker position={{lat:entry.lat, lng:entry.lng}}/>)

  if (props.loadError) {
    return <div>Map Cannot be loaded right now (check Google map API)</div>
  }

  console.log(map)
    return props.isLoaded ? (
    
      <GoogleMap
      mapContainerStyle={containerStyle}
      center={props.center}
      zoom={7}
      onLoad={onLoad}
      > 
     {parsedMarkers}
      </GoogleMap>
    
    ) : props.loadError

}