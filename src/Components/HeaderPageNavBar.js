import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav'
import "../NavBar.css";

export class HeaderPageNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="NavBar">
                <h1>Alexandru Nasalean</h1>
                <Nav className="justify-content-center" activeKey="/home">
                    <Nav.Item>
                    <Nav.Link href="/">HomePage</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="ExperiencePage" href="/ExperiencePage">ExperiencePage</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="PersonalInformationPage" href="/PersonalInformationPage">PersonalInformationPage</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="PersonalInformationPage" href="/Studies">Studies</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    </Nav.Item>
                </Nav>
            </div>
         );
    }
}
 
