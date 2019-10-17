import React, { Component } from 'react';
import './styles.css';
import profileImg from '../images/vivek.jpg';



export default class ProfileHeader extends Component{



  



    render(){
        return (
            <div className="profileContainer">
                    <div className="profileName">
                        <p className="profileText" style={{fontSize:"24px"}}>VIVEK G</p>
                        <p className="profileDesc" >(FULL STACK DEVELOPER)</p>
                    </div>
                        
                        <img src={profileImg}  /> 

                            

            </div>
        )
    }

}