import React, { Component } from 'react';
import Webcam from './react-webcam';
import snap from './../styles/logo/camera.svg';
import trash from './../styles/logo/trash.svg';

export default class Camera extends Component {
    constructor(){
        super();
        this.state = {
            screenshot : null
        }
        this.snap = this.snap.bind(this);
        this.delete = this.delete.bind(this);
    }
    delete(){
        console.log('delete');
        this.setState({
            screenshot: null
        })
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
                <div>
                    <img onClick={this.snap} src={snap} className="snap" alt="logo"/>
                </div>
                {this.state.screenshot ? 
                    <div>
                        <img src={this.state.screenshot} /> 
                        <img onClick={this.delete} src={trash} className="snap" alt="logo"/>
                        </div> 
                        : <Webcam ref="webcam" screenshotFormat='image/jpeg'/> }
            </div>
        )
    }
}