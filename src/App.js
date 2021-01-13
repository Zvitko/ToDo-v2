import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}

class FirstComponent extends Component {
  render() {
    return (
      <div className="firstComponent">
        FirstComponent
      </div>
    );
  }
}

class SecondComponent extends Component {
  render() {
    return (
      <div className="secondComponent">
        SecondComponent
      </div>
    );
  }
}

function ThirdComponent() { 
  return (
    <div className="thirdComponent">
      ThirdComponent
    </div>
  );
}

export default App;
