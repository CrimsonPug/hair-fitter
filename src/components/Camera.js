import React, { Component } from 'react';
import Webcam from './react-webcam';
import snap from './../styles/logo/camera.svg';

export default class Camera extends Component {
    constructor(){
        super();
        this.state = {
            screenshot : null
        }
        this.snap = this.snap.bind(this);
    }
    snap(){
        var screenshot = this.refs.webcam.getScreenshot();
        console.log(screenshot);
        this.setState({
            screenshot
        })
    }
    render(){
        return(
            <div>
                <Webcam ref="webcam"/>
                <div>
                    <img onClick={this.snap} src={snap} className="snap" alt="logo"/>
                </div>
                {this.state.screenshot ? <img src={this.state.screenshot} /> : null }
            </div>
        )
    }
}