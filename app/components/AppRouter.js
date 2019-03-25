import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Candies from "./candies";
import Root from "./Root";
import React from "react";

function AppRouter() {
  return (
    <div>
      <Router>
        <div>
          <Route exact path="/" component={Root} />
          <Route exact path="/candies" component={Candies} />
        </div>
      </Router>
      <Root />
    </div>
  );
}

export default AppRouter;
