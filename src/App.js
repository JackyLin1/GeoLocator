import React from "react"
import { useJsApiLoader } from '@react-google-maps/api';
import './App.css';
import Search from './Components/SearchBar/Search';
import Map from './Components/Map/Map'
import HistoryList from './Components/History/HistoryList';
function App() {

  const api = process.env.REACT_APP_Google_Map_API_Key

  const {isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: api,
    libraries: ['places']
  })

  const [address, setAddress] = React.useState('');
  const [history, setHistory] = React.useState([])
  const [center, setCenter] = React.useState({ lat: 49.2827, lng: -123.1207})

  return (

    <div>
      <Map 
      isLoaded={isLoaded}
      loadError={loadError}
      history={history}
      center={center}
      />
      <Search
      api={api}
      isLoaded={isLoaded}
      loadError={loadError}
      address={address}
      history={history}
      setAddress={setAddress}
      setHistory={setHistory}
      setCenter={setCenter}
      />
      <HistoryList
      address={address}
      history={history}
      setHistory={setHistory}
      />
    </div>
    
  );
}

export default App;
