import React from "react"
import { useJsApiLoader } from '@react-google-maps/api';
import './App.css';
import Search from './Components/SearchBar/Search';
import Map from './Components/Map/Map'
import History from './Components/History/History';
function App() {

  const api = process.env.REACT_APP_Google_Map_API_Key

  const {isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: api,
    libraries: ['places']
  })

  const [address, setAddress] = React.useState('');
  const [history, setHistory] = React.useState([])
  
  return (

    <div>
      <Map 
      isLoaded={isLoaded}
      loadError={loadError}
      history={history}
      />
      <Search
      isLoaded={isLoaded}
      loadError={loadError}
      setAddress={setAddress}
      />
      <History
      api={api}
      address={address}
      history={history}
      setHistory={setHistory}
      />
    </div>
    
  );
}

export default App;
