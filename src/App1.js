import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User.js';

class App extends Component {
  person={
    name:'Shristi',
    address:'Kathmandu'
  }

  age=20

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
                <User detail={this.person} age={this.age} />
      </div>
    );
  }
}

export default App;
