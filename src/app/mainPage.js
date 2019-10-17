import React, { Component } from 'react';



export default class MainPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            years:0,
            month:0,
            days:0,
            hrs:0,
            min:0,
            sec:0

        }
        this.showDiff = this.showDiff.bind(this);
    }


    componentDidMount(){
        this.showDiff()
    }


    showDiff(){
        var date1 = new Date("2017/05/02 06:59:00");   
        var date2 = new Date();

        var diff = (date2 - date1)/1000;
        var diff = Math.abs(Math.floor(diff));
        
        var years = Math.floor(diff/(365*24*60*60));
        var leftSec = diff - years * 365*24*60*60;
      
        var month = Math.floor(leftSec/((365/12)*24*60*60));
        var leftSec = leftSec - month * (365/12)*24*60*60;    
        
        var days = Math.floor(leftSec/(24*60*60));
        var leftSec = leftSec - days * 24*60*60;
        
        var hrs = Math.floor(leftSec/(60*60));
        var leftSec = leftSec - hrs * 60*60;
          
        var min = Math.floor(leftSec/(60));
        var leftSec = leftSec - min * 60;

        this.setState({years:years,month:month,days:days,hrs:hrs,min:min,sec:leftSec})
        setTimeout(this.showDiff,1000);
    
    }




  



    render(){
        let { years ,month,days,hrs,min,sec} = this.state;
        return (
            <div className="homeContainer">
                <div className="infoContainer">
                    <div className="expContent">
                        <h2>Work Experience</h2>
                        <ul>
                            <li>{years}<span></span>years</li>
                            <li>{month}<span></span>months</li>
                            <li>{days}<span></span>days</li>
                            <li>{hrs}<span></span>hrs</li>
                            <li>{min}<span></span>min</li>
                            <li>{sec}<span></span>sec</li>
                        </ul>
                    </div>
                </div>

                <div className="infoContainer">
                    <div className="expContent">
                        <h2>Known Technlogy</h2>
                        <p className="marquee"><span>React js ,Node Js ,React Native ,webpack,Angular 2 ,CSS3,HTML 5</span></p>
                    </div>
                </div>

                <div className="infoContainer">
                    <div className="expContent">
                        <h2>Company Details</h2>
                        <div className="compContainer">
                            <h3>Current Company</h3>
                            <p>Coding Mart Technologies</p>
                            <h3>Client Company (currently working)</h3>
                            <p>Myntra Design Pvt Ltd.</p>
                        </div>
                    </div>
                </div>


               

              
            </div>
        )
    }

}