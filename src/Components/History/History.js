import React from "react";
import './History.css'
import Geocode from "react-geocode"
import HistoryList from "./HistoryList";

export default function History (props) {

  const [history, setHistory] = React.useState([])

  Geocode.setApiKey(props.api)

  function findCoord () {
    Geocode.fromAddress(props.address).then(
      (res) => {
        const {lat, lng } = res.results[0].geometry.location;
        console.log(lat, lng);
        console.log(props.address)
        
        const searchRes = {
          lat: lat,
          lng: lng,
          address: props.address
        }
        
        setHistory(() => [...history, searchRes])     
      },
      (err) => {
        console.error(err);
      }
    )
  }

  const parsedHistory = history.map (entry => <HistoryList address={entry.address} lat={entry.lat} lng={entry.lng}/>)
  return (
    <div>
      <button
      onClick={() => findCoord()}
      >Locate</button>
      {parsedHistory}
     
    </div>
  )
}