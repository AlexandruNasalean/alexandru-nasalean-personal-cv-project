import React, { Component } from "react";
import portrait from '../portrait.jpg'
import Image from 'react-bootstrap/Image'
import "../HomePage.scss";
import Spinner from 'react-bootstrap/Spinner'

export class HomePage extends Component {

    render() { 
        return (
            // <div className="container">
            //     <div className="homepage-first-slide">
            //     <div className="home1">
            //         <div className="text">
            //             Hello!
            //         </div>
            //         <div className="introduction">
            //             Enjoy my photography!
            //         </div>
            //     </div>
            //     </div>

            // <div className="HomePage-Container">
            //     <Image src={portrait} roundedCircle  id="portrait"/>
            //     <div className="Homepage-Text">
            //     <p>Hi, i'm Alex.</p>
            //     <p>Currently, i am developing myself as an Front End Developer, focusing right now on using React.<br/>
            //     Having a background as a Photographer and ilustrator, i want to find a middle point between IT and Art, and i
            //     am exited for this new journey.
            //     </p>
            //     <p>
            //     Intrigued by art, animations, music, design, amazing food and a good tea, and even better conversations.
            //     <br/>
            //     Seeking to be inspired, to envision the unlikely, to work hard for things that are worth it, and to be surrounded by those who bring out the best in me.</p>
            //     </div>
            // </div>
       
            // </div>
            <div className="mainsection">
                <div className="LandingSection">
                <div className="homepage-first-slide">
                    <div className="Greeting">
                        <span></span>
                    </div>
                    <div className="homepage-second-slide">
                    <p>Scroll down to continue</p>
                    </div>
                 </div>
                </div>
                <div className="Introduction">
                
                </div>
                <div className="Experience"></div>
                <div className="Galery"></div>
            </div>
            

         );
    }
}
