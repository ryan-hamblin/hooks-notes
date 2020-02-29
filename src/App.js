import React from "react";
import "./App.css";
import CreateNote from "./components/CreateNote";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <div>Hi mom</div>
      </Route>
      <Route path="/create">
        <CreateNote />
      </Route>
    </Switch>
  );
}

export default App;
