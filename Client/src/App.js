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
import ScrollToTop from "./scrollToTop";



function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <Router>
            <ScrollToTop />
    <SimpleReactLightbox>
    <React.Fragment>
        <HeaderPageNavBar/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/Gallery" component={Gallery}/>
          <Route exact path="/ContactPage" component ={ContactPage}/>
          <Route exact path="/ExperiencePage" component ={ExperiencePage}/>

        </Switch>
        <Footer/>
    </React.Fragment>
    </SimpleReactLightbox>
    </Router>

  );
}

export default App;
