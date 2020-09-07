import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Menu from './components/ Menu';
import About from './components/About';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Menu/>
        <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/About" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
