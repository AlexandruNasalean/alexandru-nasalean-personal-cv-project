import React, { Component } from "react";
import portrait from '../portrait.jpg'
import Image from 'react-bootstrap/Image'
import "../HomePage.css";


export class HomePage extends Component {

    render() { 
        return ( 
            <div className="container">
            <div className="HomePage-Container">
                <Image src={portrait} roundedCircle  id="portrait"/>
                <div className="Homepage-Text">
                <p>Hi, i'm Alex.</p>
                <p>Currently, i am developing myself as an Front End Developer, focusing right now on using React.<br/>
                Having a background as a Photographer and ilustrator, i want to find a middle point between IT and Art, and i
                am exited for this new journey.
                </p>
                <p>
                Intrigued by art, animations, music, design, amazing food and a good tea, and even better conversations.
                <br/>
                Seeking to be inspired, to envision the unlikely, to work hard for things that are worth it, and to be surrounded by those who bring out the best in me.</p>
                </div>
            </div>
            </div>
         );
    }
}
