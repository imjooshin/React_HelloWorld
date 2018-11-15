import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let msg = 'Hello World';
    return (
      <div className="App">
        <p>{msg}</p>
      </div>
    );
  }
}

export default App;
