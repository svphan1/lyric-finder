import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/structure/NavBar";
import Index from "./components/structure/Index";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <div className="container"></div>
            <Switch>
              <Route exact path="/" component={Index} />
            </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
