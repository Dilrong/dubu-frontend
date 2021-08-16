import React from "react";
import "./bootstrap";
import Navbar from "./components/organisms/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPot from "./components/templates/MainPot";

function App() {
  return (
    <Router basename="/index.html">
      <Navbar isConnected />
      <div className="container">
        <Switch>
          <Route exact path="/" component={MainPot} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
