import React, { Component } from 'react';
// import Camera from './Camera';
// import Webcam from './react-webcam';
import Button from './components/Button';
import './styles/styles.css'
import Webcam from './components/react-webcam';
import { Link } from 'react-router';

class App extends Component {
  constructor(){
    super();
    this.state = {
      category : null
    }
    this.categorySelect = this.categorySelect.bind(this);
  }
  categorySelect(data){
    this.setState({
      category:data.category
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">   
          <h1 id="hero">
            <Link to="/">Hair Fitter</Link>
          </h1>
        </div>
        {React.cloneElement(this.props.children, { categorySelect:this.categorySelect , data: this.state })}
      </div>
    );
  }
}

export default App;
