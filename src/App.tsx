import React from "react";
import "./bootstrap";
import Navbar from "./components/organisms/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPot from "./components/templates/mainpot";

function App() {
  return (
    <Router>
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
