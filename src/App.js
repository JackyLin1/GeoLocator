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

  return (

    <div>
      <Map 
      isLoaded={isLoaded}
      loadError={loadError}
      />
      <Search
      isLoaded={isLoaded}
      loadError={loadError}
      />
      <History
      api={api}
      />
    </div>
    
  );
}

export default App;
