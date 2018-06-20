import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';

class App extends Component {

  constructor() {
    super();
    this.state = {
      speed: 10
    };
  }

  componentWillMount() {
    const rootRef = firebase.database().ref().child('speed');
    rootRef.on('value', snap => {
      this.setState({
        speed: snap.val()
      })
    })

  }

  render() {
    return (
      <div className="App">
        <h1>Firebase React Tutorial</h1>
        <h2>Current speed: {this.state.speed}</h2>

      </div>
    );
  }
}

export default App;
