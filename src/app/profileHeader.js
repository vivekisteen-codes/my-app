import React, { Component } from 'react';
import './styles.css';
import profileImg from '../images/vivek.jpg';



export default class ProfileHeader extends Component{



  



    render(){
        return (
            <div className="profileContainer">
                    <div className="profileName">
                        <p>VIVEK G</p>
                        <p style={{fontSize:"8px"}}>(FULL STACK DEVELOPER)</p>
                    </div>
                        
                        <img src={profileImg}  /> 

                            

            </div>
        )
    }

}