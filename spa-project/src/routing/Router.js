import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {MainPage} from "../pages/Main/Main"

export const Routing = () => (
  <Router>
    <Switch>
      <Route path="/main-page" exact component={MainPage} />
    </Switch>
  </Router>
);

export default Routing;