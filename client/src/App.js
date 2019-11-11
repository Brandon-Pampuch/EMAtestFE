// src/App.js

import React from "react";

//components
import NavBar from "./components/NavBar";
import PrivateRoute from "../src/components/PriaveRoute"
import ExternalApi from "./components/ExternalApi";
import Profile from "./components/Profile";

//routing
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* New - use BrowserRouter to provide access to /profile */}
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/external-api" component={ExternalApi} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;