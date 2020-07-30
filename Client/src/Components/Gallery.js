import React, { Component, useEffect } from "react";
import "./Galery.scss"
import { SRLWrapper } from 'simple-react-lightbox'


export class Gallery extends Component {

    render()
     {
    
        return (
          
          <div>
             
         <React.Fragment>
         <SRLWrapper>
         <div id="content-page-one" className="container content">
          <div className="row">
          
            {/* First Picture */}
            <div className="col-xl-12 col-image-large-long" data-aos="fade-up">
              <img src="https://i.imgur.com/JhyP5PO.jpg" alt="Crimson - 1" />
            </div>
           
           {/* Second Picture */}
            <div className="col-md-6 col-12 col-image-half" data-aos="fade-left">
              <img src="https://i.imgur.com/hsYU54I.jpg" alt="Crimson - 2" />
            </div>

            {/* Third Picture */}
            <div className="col-md-6 col-12 col-image-half">
              <img src="https://i.imgur.com/g9Huncz.jpg" data-aos="fade-right" alt="Crimson - 3" />
            </div>

            {/* Fourth Picture */}
            <div className="col-12 col-md-6 col-image-half">
              <img src="https://i.imgur.com/pQTrAKF.jpg" alt="Crimson - 4" data-aos="fade-down" />
            </div>

            {/* Fifth Picture */}
            <div className="col-12 col-md-6 col-image-half" data-aos="fade-down">
              <img src="https://i.imgur.com/yevHt4E.jpg" alt="Crimson - 5" />
            </div>

            {/* Sixth Picture */}
            <div className="col-6 col-image-large-half" data-aos="fade-right">
              <img src="https://i.imgur.com/PA1oQHJ.jpg" alt="Wild Angels Concert - 1" />
            </div>

            {/* Seventh Picture */}
            <div className="col-6 col-image-large-half" data-aos="fade-left">
              <img src="https://i.imgur.com/YdDxR92.jpg" alt="Wild Angels Concert - 2" />
            </div>

            {/* Eight Picture */}
            <div className="col-8 col-image-large-half" data-aos="fade-right">
              <img src="https://i.imgur.com/CRucnpX.jpg" alt="Wild Angels Concert - 3" />
            </div>

            {/* Ninth Picture */}
            <div className="col-4 col-image-large-half" data-aos="fade-left">
              <img src="https://i.imgur.com/6A31a03.jpg" alt="Wild Angels Concert - 4" />
            </div>

            {/* Tenth Picture */}
            <div className="col-md-4 col-12 col-image-small"data-aos="fade-up">
              <img src="https://i.imgur.com/cydbSEZ.jpg" alt="The mist in the forest - 1" />
            </div>

            {/* Eleventh Picture */}
            <div className="col-md-4 col-12 col-image-small">
              <img src="https://i.imgur.com/mPZewY4.jpg" alt="The mist in the forest - 2" data-aos="fade-down" />
            </div>

            {/* Twelve Picture */}
            <div className="col-md-4 col-12 col-image-small">
              <img src="https://i.imgur.com/gQD4pEP.jpg" alt="The mist in the forest - 3" data-aos="fade-up"/>
            </div>
            
          </div>
        </div>
          </SRLWrapper>
          </React.Fragment>
      
          </div>
          
         );
    }
}

