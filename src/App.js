import React from 'react';
import Home from './components/home'
import Login from './components/login' 
import { Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App container">
        <h3>  Redux Learning 07/18/2019 </h3>
          <Route exact path = "/" component={Home} />
          <Route path = "/login" component={Login} />
      </div>
    </div>
  );
}

export default App;
