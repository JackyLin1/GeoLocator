import React from "react";

export default function HistoryList (props) {
return (
  <article>
    <h4>address:{props.address}</h4>
    <div>
    <h4>lng: {props.lng}</h4>
    <h4>lat: {props.lat}</h4>
    </div>    
  </article>
)
}