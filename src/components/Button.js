import React, { Component } from 'react';
import { Link } from 'react-router';
import './../styles/styles.css'
import male from './../styles/logo/boy.svg';
import female from './../styles/logo/girl.svg';
import neutral from './../styles/logo/horse.svg';



export default class Button extends Component {
    render(){
        return(
            <div>
                <div className="description-wrapper">
                        <h2>Making Hairstyle Fun!</h2>
                        <p>No idea what hairstyle fits you best? Let us help! Just take quick picture of yourself and we will do our best to find the right fit!</p>
                    </div>
                <div className="button-container row">
                        <div className="col-sm-12 col-lg-4">
                            <Link to="/camera">
                                <img className="icon" src={male} />
                            </Link>
                            <h2>Male Hairstyle</h2>
                            <p>Unleash your </p>
                        </div>
                        <div className="col-sm-12 col-lg-4">
                            <Link to="/camera">
                                <img className="icon" src={female} />
                            </Link>
                            <h2>Female Hairstyle</h2>
                            <p>Find out how simple it is to record statistics</p>
                        </div>
                        <div className="col-sm-12 col-lg-4">
                            <Link to="/camera">
                                <img className="icon" src={neutral} />
                            </Link>
                            <h2>Be adventurous</h2>
                            <p>Just do it</p>
                        </div>
                </div> 
            </div> 
        )
    }
}