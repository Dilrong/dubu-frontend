import React from "react";
import "./bootstrap";
import Navbar from "./components/organisms/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPot from "./components/templates/MainPot";

function App() {
  return (
    <Router basename="/index.html">
      <div className="container">
        <Navbar isConnected />
        <div>
          <Switch>
            <Route exact path="/" component={MainPot} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
