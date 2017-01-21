import React, { Component } from 'react';
// import Camera from './Camera';
// import Webcam from './react-webcam';
import Button from './components/Button';
import './styles/styles.css'
import Webcam from './components/react-webcam';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">   
          <h1 id="hero">
            <Link to="/">Hair Fitter</Link>
          </h1>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.props.children}
      </div>
    );
  }
}

export default App;
