import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Homepage from './components/HomePage';
import UserPanel from './components/UserPanel';
import AnalyzePage from './components/analyzePage';
import Example from './example';
import About from './components/About';
import Explanation1 from './components/practice1/Explanation1';
import Practice1Results from './components/practice1/Practice1Results';
import ShowWords from './components/practice1/ShowWords';
import UserInput from './components/practice1/UserInput';
import Explanation2 from './components/practice2/Explanation2';


function App() {
  return (
    <Router>
        <div className="App">  
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} /> 
                <Route path="/dashboard" component={UserPanel} />
                <Route path="/analyze" component={AnalyzePage} />
                <Route path="/example" component={Example} />
                <Route path="/about" component={About} />
                <Route path="/explanation1" component={Explanation1} />
                <Route path="/practice1results" component={Practice1Results} />
                <Route path="/showWords" component={ShowWords} />
                <Route path="/userInput" component={UserInput} />
                <Route path="/explanation2" component={Explanation2} />
            </Switch>
        </div>
    </Router>
  )
}

export default App;