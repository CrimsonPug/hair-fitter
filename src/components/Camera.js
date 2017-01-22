import React, { Component } from 'react';
import Webcam from './react-webcam';
import snap from './../styles/logo/camera.svg';
import trash from './../styles/logo/trash.svg';
import upload from './../styles/logo/upload.svg';
import axios from 'axios';
import './../styles/styles.css'

export default class Camera extends Component {
    constructor(props){
        super(props);
        this.state = {
            screenshot : null,
            category: this.props.data.category
        }
        this.snap = this.snap.bind(this);
        this.delete = this.delete.bind(this);
        this.upload = this.upload.bind(this);
    }
    delete(){
        console.log('delete');
        this.setState({
            screenshot: null
        })
    }
    snap(){
        var screenshot = this.refs.webcam.getScreenshot();
        var splitString = screenshot.split(',');
        var properData = splitString[1];
       
        this.setState({
            screenshot : screenshot,
            proper : properData
        })
    }
    upload(){
        console.log(this.state);
        //send the state object to back end here 
        var config={headers:{
            "Content-Type":"application/json"},
             auth: {
                username: 'test',
                password: 'Password123'
              }
            };
        axios.post('https://face-fitter-backend-kcajfire.c9users.io/api/face', { "base64" : this.state.proper}, config).then(function(response){
            console.log('Success: ' + response);
          });
    }
    render(){
        // console.log(this.props)
        return(
            <div className="camera-wrapper">
                <div>
                    <img onClick={this.snap} src={snap} className="snap" alt="logo"/>
                </div>
                {this.state.screenshot ? 
                        <div className="control-wrapper">
                            <img src={this.state.screenshot} /> 
                            <img onClick={this.delete} src={trash} className="snap" alt="logo"/>
                            <img onClick={this.upload} src={upload} className="snap" alt="logo"/>
                        </div> 
                        : <Webcam ref="webcam" screenshotFormat='image/jpeg'/> }
                
            </div>
        )
    }
}
