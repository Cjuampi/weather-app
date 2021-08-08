import {BrowserRouter} from 'react-router-dom'
import Main from './components/main/Main'
import { valuesContext } from './contexts/weather.contexts'
import './App.css';
import { useState } from 'react';

function App() {
  const [ city, setCity ] = useState('')
  const [ typeG, setTypeG ] = useState(false)
  const [ cityName,setCityName ] = useState('')
  const [ searcher, setSearcher ] = useState(false)
  const [ dataWeather, setDataWeather ] = useState([])
  
  const cntxvalues = {
    city,setCity,
    cityName, setCityName,
    searcher,setSearcher,
    dataWeather,setDataWeather,
    typeG, setTypeG
  }

  return (
    <div className="App">
      <BrowserRouter>
        <valuesContext.Provider value ={cntxvalues}>
          <Main/>
        </valuesContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
