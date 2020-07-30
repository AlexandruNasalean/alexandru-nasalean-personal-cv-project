import React, { Component } from "react";
import Tabs from 'react-bootstrap/Tabs'
import ListGroup from 'react-bootstrap/ListGroup'
import TabContainer from 'react-bootstrap/TabContainer'
import Tab from 'react-bootstrap/Tab'
import TabContent from 'react-bootstrap/TabContent'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {LuminosJob} from './Experience Tabs/Luminos-Job'
import {UpcJob} from './Experience Tabs/Upc-Job'
import {GameloftJob} from './Experience Tabs/Gameloft'
import {AltexJob} from './Experience Tabs/AltexRomania'

import "./Experience Tabs/ExperienceStyle.css"



export class ExperiencePage extends Component {
 
    render() { 
        return ( 
            <div className="container">
              <div className="ExperiencePageTitle">                
              <h1>Experience</h1>
</div>
                <div>
                <Tab.Container id="list-group-tabs-example" >
  <Row>
    <Col sm={4}>
      <ListGroup variant="flush">
        <ListGroup.Item action href="#link1">
          Luminos Software
        </ListGroup.Item>
        <ListGroup.Item action href="#link2">
          UPC Romania
        </ListGroup.Item>
        <ListGroup.Item action href="#link3">
          Altex
        </ListGroup.Item>
        <ListGroup.Item action href="#link4">
          Gameloft 
        </ListGroup.Item>
      </ListGroup>
    </Col>
    <Col sm={8}>
      <Tab.Content>
        <Tab.Pane eventKey="#link1">
          <LuminosJob />
        </Tab.Pane>
        <Tab.Pane eventKey="#link2">
          <UpcJob />
        </Tab.Pane>
        <Tab.Pane eventKey="#link3">
          <AltexJob />
        </Tab.Pane>
        <Tab.Pane eventKey="#link4">
          <GameloftJob />
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
                </div>
            </div>
         );
    }
}
 
