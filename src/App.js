import React from "react";
import "./App.css";
import CreateNote from "./components/CreateNote";
import { Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/create">Create Note</Link>
        <Link to="/singlenote">View Note</Link>
      </div>
      <Switch>
        <Route path="/" exact>
          <div>Hi mom</div>
        </Route>
        <Route path="/create">
          <CreateNote />
        </Route>
        <Route path="/singlenote">
          <div>Single Note</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
