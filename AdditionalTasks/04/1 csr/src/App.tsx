import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import "./App.scss";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";

function App(): JSX.Element {
  return (
    <React.Fragment>
      <div>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/AboutUs">AboutUs</Link>
                </li>
                <li>
                  <Link to="/ContactUs">ContactUs</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/AboutUs">
                <AboutUs />
              </Route>
              <Route path="/ContactUs">
                <ContactUs />
              </Route>
              <Route path="/" exact={true}>
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
