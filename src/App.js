import React from 'react';
import logo from './logo.svg';
import './App.css';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

// // CommonJS
// const Swal = require('sweetalert2')

function App() {
  return (
    <div className="App">
      <div className="card">
        <img className="logo" src={logo} />
        <p className="title">card buetfiy</p>
        <div className="button">
          <button className="red" onClick={Swal.fire('you click red')}>red</button>
          <button className="green" onClick={Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Your work has been saved',
  showConfirmButton: false,
  timer: 1500
})}>green</button></div>
      </div>
    </div>
  );
}

export default App;
