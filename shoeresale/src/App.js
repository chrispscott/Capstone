import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Menu from './components/ Menu';
import About from './components/About';
import Home from './components/Home';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Shop from './components/Shop';
import Sell from './components/Sell';

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
        <Banner/>
        <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Shop" component={Shop} />
          <Route path="/Sell" component={Sell} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
