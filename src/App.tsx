import React from "react";
import "./bootstrap";
import Navbar from "./components/organisms/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPot from "./components/templates/MainPot";
import CommunityPot from "./components/templates/CommunityPot";
import MyPot from "./components/templates/MyPot";
import MyPastPot from "./components/templates/MyPastPot";
import Pot from "./components/templates/Pot";

function App() {
  return (
    <Router basename="/index.html">
      <Navbar isConnected />
      <div className="container">
        <Switch>
          <Route exact path="/" component={MainPot} />
          <Route path="/community-pots" component={CommunityPot} />
          <Route exact path="/my-dubupots" component={MyPot} />
          <Route path="/my-dubupots/past-pots" component={MyPastPot} />
          <Route path="/pot" component={Pot} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
