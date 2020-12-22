import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Nav from './Nav';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Homepage from './components/HomePage';
import UserPanel from './components/UserPanel';
import AnalyzePage from './components/analyzePage';
import Practice from './components/Practice';
import Example from './example'
import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
            <Nav />       
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} /> 
                <Route path="/dashboard" component={UserPanel} />
                <Route path="/analyze" component={AnalyzePage} />
                <Route path="/practices" component={Practice} />
                <Route path="/example" component={Example} />
            </Switch>
        </div>
    </Router>
  )
}

export default App;