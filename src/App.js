import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import NewUser from './components/NewUser'
import UserList from './components/UserList'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
     
      <header className="App-header">
      <Navigation />
        <Route path="/add" component={NewUser}/>
        <Route path="/user-list" component={UserList} />
      </header>
    </div>
  );
}

export default App;
