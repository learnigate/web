import { StyledApp } from "./App.styled.js";
import SideBar from "./components/SideBar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import General from "./components/MainPart/General";
import Placeholder from "./pages/Main/Placeholder"

import React from "react";


function App() {
  return (
    <React.Fragment>
      <StyledApp>
      <Router>
      <SideBar />
      <Switch>
        <Route path='/profile' exact component={Placeholder} />
        <Route path='/learning_pathes' exact component={General} />
        <Route path='/learning_pathes/path/:id' component={General} />
        <Route path='/statistics' exact component={Placeholder} />
      </Switch>
    </Router>
    </StyledApp>
    </React.Fragment>
  );
}

export default App;

