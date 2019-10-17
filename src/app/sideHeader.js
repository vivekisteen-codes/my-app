import React, { Component } from 'react';
import './styles.css';



export default class SideHeader extends Component{



  



    render(){
        return (
            <div className="sideContainer">

                <div className="sideContent">
                    <p>VIVEK</p>
                </div>
                <div className="sideContent">
                    <p>PROFILE</p>
                </div>
                <div className="sideContent">
                    <p>EDUCATION</p>
                </div>
                <div className="sideContent">
                    <p>PROJECTS</p>
                </div>

                <div className="sideContent">
                    <p>TECH</p>
                </div>
            </div>
        )
    }

}