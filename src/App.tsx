import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

import MainPot from "./views/MainPot";
import MyPot from "./views/MyPot";
import Pot from "./views/Pot";
import NotFound from "./views/NotFound";
import Header from "./components/Header";

const App = () => {
  return (
    <Router basename="/index.html">
      <CssBaseline />
      <Header />
      <Switch>
        <Route exact path="/" component={MainPot} />
        <Route path="/my-dubupots" component={MyPot} />
        <Route path="/pot" component={Pot} />

        <Route path={"*"} component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
