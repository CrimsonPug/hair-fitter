import React, { Component } from 'react';
import { Link } from 'react-router';
import './../styles/styles.css'


export default class Button extends Component {
    render(){
        return(
            <div className="button-container">
                <Link to="/camera"><button className="male">Male</button></Link>
                <h2>YO</h2>
            </div>
        )
    }
}