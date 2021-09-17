import React from 'react';
import './App.css';
import { DataProvider, useData } from './context/DataContext';
import {RawSearchComponent} from './components/RawSearchComponent';

import data from './data/contacts.data.json'

function App() {
  return (
    <div className="App">
      {/* <DataProvider> */}
        <RawSearchComponent data={data}/>
      {/* </DataProvider> */}
    </div>
  );
}

export default App;
