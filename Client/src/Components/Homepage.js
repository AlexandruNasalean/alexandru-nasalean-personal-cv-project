import React, { Component } from "react";
import portrait from '../portrait.jpg'
import Image from 'react-bootstrap/Image'
import "../HomePage.scss";
import Spinner from 'react-bootstrap/Spinner'
import LoadingLine from "../Loading-Line.svg"
import {
    Link
  } from "react-router-dom";


export class HomePage extends Component {

    render() { 
        return (
       

            <div className="mainsection">
                <div className="LandingSection">
                <div className="homepage-first-slide">
                    <div className="Greeting">
                        <span></span>
                    </div>
                    <div className="homepage-second-slide">
                   
                        <h2>I am an <span></span></h2>
                        <div   div className="homepage-second-slide-scroll" id="scroll-down-text">
                        <span></span>
                        </div>
                    </div>
                 </div>
                </div>
                <div className="Introduction">
                <div className="Introduction-Portrait">
                <img src={portrait}  
                id="introduction-wb-portrait" 
                data-aos="fade-right" 
                data-aos-duration="2000"/>
                </div>
                <div className="Homepage-Text" 
                data-aos="zoom-in-up" 
                data-aos-duration="3000">
                <h1>About me</h1>
                <p>I am a photography  enthusiast currently based in Romania.<br/>
                    Currently developing an unhealthy obession with Front-End Development. <br/>I have worked as a professional in different venues such as concerts, 
                    events and product pictures.<br/>Always striving to improve my craft with each shutter click!
                </p>
                <p>
                Intrigued by art, animations, music, design, amazing food, good tea, and even better conversations.
                <br/>
                Seeking to be inspired, to envision the unlikely, to work hard for things that are worth it, and to be surrounded by those who bring out the best in me.</p>
                <p>If you are interested in colaborating, please scroll down to the gallery and take a look!</p>
                </div>
                </div>
                <div className="Galery" >
                     <p data-aos="flip-right">Got your attention?<br/>Here's a collection of my professional work<br/>
                     Please take a look</p>
                     <div className="galery-link-container">
                     <Link to="/Gallery"
                     data-aos="fade-down"
                     data-aos-easing="linear"
                     data-aos-duration="1000">
                     <a>Galery</a>
                     </Link>
                     </div>
                    </div>
                <div className="Professional-Work">
                <p data-aos="flip-left">Want to take a look at my professional experience?</p>
            
                     <div className="galery-link-container">
                     <Link to="/ExperiencePage"
                     data-aos="fade-up"
                     data-aos-easing="linear"
                     data-aos-duration="1000">
                     <a>My Experience</a>
                     </Link>
                     </div>
                </div>
                

                </div>
            

         );
    }
}
