import React, { useState } from 'react'
import Login from './components/Login'
import Nav from './Nav';
import SignUp from './components/SignUp';
import Homepage from './components/HomePage';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App () {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch> 
      </div>
    </Router>
  );
}

export default App;