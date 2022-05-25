import React from "react";
import './History.css'
import Geocode from "react-geocode"

export default function History (props) {
  Geocode.setApiKey(props.api)

  function findCoord () {
    Geocode.fromAddress("Vancouver").then(
      (res) => {
        const {lat, lng } = res.results[0].geometry.location;
        console.log(lat, lng);
      },
      (err) => {
        console.error(err);
      }
    )
  }

  return (
    <div>
      <button
      onClick={() => findCoord()}
      >Testing</button>
    </div>
  )
}