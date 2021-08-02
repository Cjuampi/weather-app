import {BrowserRouter} from 'react-router-dom'
import Main from './components/main/Main'
import { valuesContext } from './contexts/weather.contexts'
import './App.css';
import { useState } from 'react';

function App() {
  const [ city, setCity ] = useState('')
  
  const cntxvalues = {
    city,setCity
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
