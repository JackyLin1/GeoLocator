import React from "react";
import { StandaloneSearchBox} from '@react-google-maps/api';

export default function Search (props) {
  
  if (props.loadError) {
    return <div>Map Cannot be loaded right now (check Google map API)</div>
  }

  const grabAddress = () => {
    // console.log(document.getElementById("searchBox").value);
    props.setAddress(document.getElementById("searchBox").value);
  }

  return props.isLoaded ? (

    <div>
      <h1>search bar</h1>
      <StandaloneSearchBox
      onPlacesChanged={() => grabAddress()}>
      <input
        type="text"
        placeholder="Enter a Location"
        className="searchBar"
        id='searchBox'
      />
      </StandaloneSearchBox>
    </div>
  ): props.loadError
}