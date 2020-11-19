import React, { useState } from 'react'
import Login from './components/Login'
import Nav from './Nav';
import SignUp from './components/SignUp';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App () {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch> 
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)
export default App;