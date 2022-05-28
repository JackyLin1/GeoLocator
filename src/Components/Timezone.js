import React, { useEffect } from 'react';
import axios from 'axios';

export default function Timezone (props) {

  const myDate = new Date('1/1/1970');
  const timeStamp = myDate.getTime();
  const [offset, setOffset] = React.useState('')

  useEffect(() => {
    axios.get (`https://maps.googleapis.com/maps/api/timezone/json?location=${props.center.lat},${props.center.lng}&timestamp=${timeStamp}&key=${props.api}`)
    .then(res => setOffset(res.data.rawOffset + res.data.dstOffset))
  }
  )

  function calcTime(offset) {
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = new Date(utc + (1000*offset));

    return (nd)
    }

  return(
    <div>
      <label>Current Time: </label>
      <input
      readOnly
      value={calcTime(offset)}
      />

    </div>
  )
};