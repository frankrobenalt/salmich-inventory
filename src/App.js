import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';

class App extends Component {
  constructor(){
    super();
    this.state = {
      validEmail: false,
      email: '',
      showHomePage: false
    }
  }

  validEmail(email){
    this.setState({ 
      showHomePage: true, 
      email 
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.showHomePage ? 
        <Home 
          email={this.state.email}
        />
        :
        <Login 
          validEmail={this.validEmail.bind(this)}
        />
        }
      </div>
    );
  }
}

export default App;
