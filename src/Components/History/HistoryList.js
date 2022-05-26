import React from "react";
import './History.css'
import History from "./History";

export default function HistoryList (props) {

  const parsedHistory = props.history.map (entry => <History address={entry.address} lat={entry.lat} lng={entry.lng}/>)
  return (
    <div>
      {parsedHistory}
    </div>
  )
}