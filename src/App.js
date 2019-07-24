import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import NewUser from './components/NewUser'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route path="/add" component={NewUser}/>
      </header>
    </div>
  );
}

export default App;
