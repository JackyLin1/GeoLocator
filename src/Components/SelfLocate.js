import React, { useEffect } from "react";
import axios from 'axios';
import Geocode from "react-geocode"


export default function SelfLocate (props) {
  const [lat, setLat] = React.useState('');
  const [lng, setLng] = React.useState("");
  const [address, setAddress] = React.useState("");

  Geocode.setApiKey(props.api)

  useEffect(() => {
    axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${props.api}`)
    .then(res => {setLat(res.data.location.lat)
    setLng(res.data.location.lng)})  
  },[])

  Geocode.fromLatLng(`${lat}`, `${lng}`).then(
    (response) => {
      const address = response.results[0].formatted_address;
      setAddress(address)
    }
  )

  function getLocation () {
    const searchRes = {
      key: props.marker.length,
      lat: lat,
      lng: lng,
      address: address,
      visible: true,
    }
    props.setCenter({lat: lat, lng: lng})
    props.setHistory(() => [...props.history, searchRes])
    props.setMarker (() => [...props.marker, searchRes])
  }

  return (
    <button onClick={getLocation}>SelfLocate</button>
  )
}