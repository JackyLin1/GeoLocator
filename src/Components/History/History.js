import React from "react";
import './History.css'
import Geocode from "react-geocode"
import HistoryList from "./HistoryList";

export default function History (props) {

  Geocode.setApiKey(props.api)

  function findCoord () {
    Geocode.fromAddress(props.address).then(
      (res) => {
        const {lat, lng } = res.results[0].geometry.location;
        
        const searchRes = {
          lat: lat,
          lng: lng,
          address: props.address
        }
        props.setCenter({lat: lat, lng: lng})
        props.setHistory(() => [...props.history, searchRes])     
      },
      (err) => {
        console.error(err);
      }
    )
  }

  const parsedHistory = props.history.map (entry => <HistoryList address={entry.address} lat={entry.lat} lng={entry.lng}/>)
  return (
    <div>
      <button
      onClick={() => findCoord()}
      >Locate</button>
      {parsedHistory}
     
    </div>
  )
}