import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {HeaderPageNavBar} from "./Components/HeaderPageNavBar"
import {ExperiencePage} from "./Components/ExperiencePage";
import {PersonalInformationPage} from "./Components/Personal-InformationPage";
import {Studies} from "./Components/Studies";
import {Layout} from "./Components/Layout";
import {HomePage} from "./Components/Homepage"


function App() {
  return (
    <React.Fragment>
      <Layout>
        <HeaderPageNavBar/>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/ExperiencePage" component={ExperiencePage}/>
          <Route exact path="/PersonalInformationPage" component={PersonalInformationPage}/>
          <Route exact path="/Studies" component={Studies}/>
        </Switch>
      </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
