import React, { Component } from "react";
import "./FooterStyle.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {  faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export function Footer() {
    return (
     <div className="main-footer">
       <div className="container">
      <div className="row" id="Footer-Row">
        {/* Col 1 */}
        <div className="col">
          <div className="Icons">
          <a href="https://www.linkedin.com/in/alexandru-nasalean-8205bb174/"><FontAwesomeIcon icon={faLinkedinIn} id="LinkdInLogo"/></a>
          <a href="https://github.com/AlexandruNasalean"><FontAwesomeIcon icon={faGithub} id="GitHubLogo"/></a>
          </div>
        </div>
        {/* Col 2 */}
        <div className="col">
        </div>
        {/* Col 3 */}
        <div className="col">
          <div className="ContactButton">
          <Link className="link" to="/ContactPage">            
          <button>Contact Me</button>
            </Link>
          </div>
         
        </div>
      </div>

       </div>
     </div>
    );
  }
 