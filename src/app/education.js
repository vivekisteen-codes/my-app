import React, { Component } from 'react';
import college from '../images/1.jpg';
import hsc from '../images/2.jpg';
import school from '../images/3.JPG';

import {Carousel} from './carousel/carousel';






export default class Education extends Component{

    constructor(props) {
        super(props);
        this.state = {
            slideRight:false

        }
    }



    slideRightfun(){
        this.setState({slideRight:true})
    }

  



    render(){

        let { slideRight } = this.state;


let slides = [
    <img  src={college} alt="1" />,
    <img  src={hsc} alt="2" />  ,
<img  src={school} alt="3" /> ]
        return (
           <div>

               <div className="educationContent">
                   <div>K.S.R COLLEGE OF ENGINEERING</div>
                   <div>(TIRUCHENGODE)</div>
                   <div>COMPUTER SCIENCE AND ENGINEERING</div>
                   <div>(CSE)</div>
                   <div>CGPA :8.3</div>
               </div>

               <div className="carousalImg">
                    <Carousel slides={slides} slideRight={slideRight}/>
               </div>

               <div className="tapButton" onClick={this.slideRightfun.bind(this)}>
                   <div>Tap</div>
               </div>

               

           </div>
        )
    }

}