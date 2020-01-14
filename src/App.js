import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="card">
        <img className="logo" src={logo} />
        <p className="title">card buetfiy</p>
        <div className="button">
          <button className="red">red</button>
          <button className="green">green</button></div>
      </div>
    </div>
  );
}

export default App;
