import React from 'react';
import { SearchComponent } from './components/SearchComponent';
import { UserContextProvider, useUserContext } from './context/UserContext'
import './styles/App.scss';
import data from './data/users.json'

function App() {

  const setUser = useUserContext()

  return (
    <div className="App">
      <SearchComponent data={data}/>
    </div>
  );
}

export default App;
