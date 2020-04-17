import React from "react";

import { ApolloClient } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import Container from "@material-ui/core/Container";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AddArtist from "./components/forms/AddArtist";
import AddInstrument from "./components/forms/AddInstrument";
import Artists from "./components/lists/Artists";
import Title from "./components/layout/Title";

const client = new ApolloClient({
  link: createHttpLink({ uri: "http://localhost:4001/graphql" }),
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route path="/">
          <Container className="App">
            <Title />
            <AddArtist />
            <AddInstrument />
            <Artists />
          </Container>
        </Route>
        <Route path="/artists/:id">
          <Container className="App">
            <Artists />
          </Container>
        </Route>
      </Switch>
    </Router>
  </ApolloProvider>
);

export default App;
