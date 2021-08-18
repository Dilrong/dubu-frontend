import React from "react";
import "./bootstrap";
import Navbar from "./components/organisms/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPot from "./components/templates/MainPot";
import CommunityPot from "./components/templates/CommunityPot";
import MyPot from "./components/templates/MyPot";

function App() {
  return (
    <Router basename="/index.html">
      <Navbar isConnected />
      <div className="container">
        <Switch>
          <Route exact path="/" component={MainPot} />
          <Route path="/communityPots" component={CommunityPot} />
          <Route path="/my-dubupots" component={MyPot} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
