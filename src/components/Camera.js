import React, { Component } from 'react';
import { Link } from 'react-router';

import Webcam from './react-webcam';
import snap from './../styles/logo/camera.svg';

export default class Camera extends Component {
    constructor(){
        super();
        this.state = {
            screenshot : null
        }
        this.snap = this.snap.bind(this);
        this.clearSnap = this.clearSnap.bind(this);
    }

    snap(){
        var screenshot = this.refs.webcam.getScreenshot();
        console.log(screenshot);
        this.setState({
            screenshot
        })
    }

    clearSnap(){
        this.setState({
            screenshot: null
        });
    }

    render(){
        const theWebcam=(
        <div>
            <Webcam ref="webcam" screenshotFormat='image/jpeg' />
                <button onClick={this.snap}>
                    <img src={snap} className="snap" alt="logo"/>
                </button>
        </div>
        )

        const toUpload=(
            <div>
                <img src={this.state.screenshot} />
                <div>
                    <button> Upload </button>
                    <button onClick={this.clearSnap}> Go Back </button>
                </div>
            </div>
        )

        return(
            <div>
                {!this.state.screenshot ? theWebcam : null}
                {this.state.screenshot ?  toUpload : null }
            </div>
        )
    }
}