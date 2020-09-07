import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Menu from './components/ Menu';
import About from './components/About';
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      {/* <Menu /> */}
      {/* <About/> */}
      <Home/>
    </div>
  );
}

export default App;
