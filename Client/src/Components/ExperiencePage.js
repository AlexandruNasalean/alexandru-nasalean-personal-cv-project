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

import "./Experience Tabs/ExperienceStyle.scss"



export class ExperiencePage extends Component {
 
    render() { 
        return ( 
            <div className="container">
              <div className="ExperiencePageTitle">                
              <h1>Experience</h1>
</div>
                <div>
                  <h1>Work-Experience</h1>
                <Tab.Container id="list-group-tabs-example" >
  <Row>
    <Col sm={4}>
      <ListGroup variant="flush">
        <ListGroup.Item action href="#link1">
        Junior Support/QA Analyst
        </ListGroup.Item>
        <ListGroup.Item action href="#link2">
        Technical Support Help Desk
        </ListGroup.Item>
        <ListGroup.Item action href="#link4">
        Quality Assurance Analyst
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
                <h1>Technologies</h1>
                <p>I have experience with the following technologies:</p>
                <div className="Technologies-Logos">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" id="React-Logo"></img>
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" id="HTML5-Logo"></img>
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" id="Node-Js-Logo"></img>
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" id="CSS-Logo"></img>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg" id="Sass-Logo"></img>
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" id="JS-Logo"></img>

                </div>
            </div>
         );
    }
}
 
