import React, { Component } from 'react';
import './styles.css';
import MainPage from './mainPage';
import SideHeader from './sideHeader';
import ProfileHeader from './profileHeader';


export default class DashBoard extends Component{



  



    render(){
        return (
            <div className="mainContainer">
                <SideHeader></SideHeader>
                <ProfileHeader></ProfileHeader>
                <MainPage></MainPage>
            </div>
        )
    }

}