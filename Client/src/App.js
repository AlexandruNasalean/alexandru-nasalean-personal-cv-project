import React, {useEffect } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {HeaderPageNavBar} from "./Components/HeaderPageNavBar"
import {ExperiencePage} from "./Components/ExperiencePage";
import {Gallery} from "./Components/Gallery";
import {Studies} from "./Components/Studies";
import {Layout} from "./Components/Layout";
import {HomePage} from "./Components/Homepage"
import {Footer} from "./Components/Footer"
import {ContactPage} from "./Components/ContactPage"
import SimpleReactLightbox from "simple-react-lightbox";
import AOS from "aos"
import "aos/dist/aos.css"



function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <SimpleReactLightbox>
    <React.Fragment>
        <HeaderPageNavBar/>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/ExperiencePage" component={ExperiencePage}/>
          <Route exact path="/Gallery" component={Gallery}/>
          <Route exact path="/Studies" component={Studies}/>
          <Route exact path="/ContactPage" component ={ContactPage}/>
        </Switch>
        <Footer/>
      </Router>
    </React.Fragment>
    </SimpleReactLightbox>

  );
}

export default App;
