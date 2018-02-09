import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-title">
            <h1>const message = 'Welcome to ReactJSpain'</h1>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
