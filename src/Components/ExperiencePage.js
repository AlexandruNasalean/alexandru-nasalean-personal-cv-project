import React, { Component } from "react";
import Tabs from 'react-bootstrap/Tabs'
import ListGroup from 'react-bootstrap/ListGroup'
import TabContainer from 'react-bootstrap/TabContainer'
import Tab from 'react-bootstrap/Tab'
import TabContent from 'react-bootstrap/TabContent'

export class ExperiencePage extends Component {
 
    render() { 
        return ( 
            <div className="container">
                <h1>Experience</h1>
                <div>
                <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
  <Tab eventKey="home" title="Home">
    <Sonnet />
  </Tab>
  <Tab eventKey="profile" title="Profile">
    <Sonnet />
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
    <Sonnet />
  </Tab>
</Tabs>
                </div>
            </div>
         );
    }
}
 
