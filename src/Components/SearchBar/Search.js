import React from "react";
import { StandaloneSearchBox} from '@react-google-maps/api';
import Geocode from "react-geocode"

export default function Search (props) {

  Geocode.setApiKey(props.api)
  
  if (props.loadError) {
    return <div>Map Cannot be loaded right now (check Google map API)</div>
  }

  const grabAddress = () => {
    // console.log(document.getElementById("searchBox").value);
    props.setAddress(document.getElementById("searchBox").value);
  }

  function findCoord (e) {
    e.preventDefault();
    Geocode.fromAddress(props.address).then(
      (res) => {
        const {lat, lng } = res.results[0].geometry.location;
        
        const searchRes = {
          id: props.history.length,
          lat: lat,
          lng: lng,
          address: props.address
        }
        props.setCenter({lat: lat, lng: lng})
        props.setHistory(() => [...props.history, searchRes])
        props.setAddress('')
        document.getElementById("searchBox").value = '';
      },
      (err) => {
        console.error(err);
      }
    )
  }

  return props.isLoaded ? (

    <div>
      <h1>search bar</h1>
      <StandaloneSearchBox
      onPlacesChanged={() => grabAddress()}>
      <form onSubmit={findCoord}>
        <input
          type="text"
          placeholder="Enter a Location"
          className="searchBar"
          id='searchBox'
        />
        <button
          type="submit"
        >Locate</button>
      </form>
      </StandaloneSearchBox>
    </div>
  ): props.loadError
}