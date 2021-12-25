import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import SearchDepartment from "./components/SearchDepartment";
import { Switch, Route } from "react-router-dom";
import PostingDetails from "./components/PostingDetails";

import { Container } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <Container>
            <Router>
              <Switch>
                <Route path="/" exact>
                  <h1 className="header">Job Search App </h1>
                  <SearchDepartment />
                </Route>

                <Route>
                  <PostingDetails />
                </Route>
              </Switch>
            </Router>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
