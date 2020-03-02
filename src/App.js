import React from "react";
import "./App.css";
import CreateNote from "./components/CreateNote";
import Notes from "./components/Home";
import Nav from "./components/Nav";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="AppContainer">
      <Nav />
      <div>
        <Switch>
          <Route path="/" exact>
            <Notes />
          </Route>
          <Route path="/create">
            <CreateNote />
          </Route>
          <Route path="/singlenote">
            <div>Single Note</div>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
