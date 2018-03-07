import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InventoryItemWrapper from './Components/InventoryItemWrapper/InventoryItemWrapper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InventoryItemWrapper />
      </div>
    );
  }
}

export default App;
