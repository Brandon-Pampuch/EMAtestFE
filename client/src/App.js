// src/App.js
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import React from "react";
import { useAuth0 } from "./react-auth0-spa"

//components
import NavBar from "./components/NavBar";
import PrivateRoute from "../src/components/PriaveRoute"
import ExternalApi from "./components/ExternalApi";
import Profile from "./components/Profile";

//routing
import { BrowserRouter, Route, Switch } from "react-router-dom";

//apollo client set up

function App() {
  const { getTokenSilently } = useAuth0();
  const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    request: async (operation) => {
      const token = await getTokenSilently()
      console.log(token)
      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : ''
        }
      })
    }
  })
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default App;