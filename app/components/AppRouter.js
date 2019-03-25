import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Candies from "./Candies";
import Root from "./Root";
import React from "react";
import SingleCandy from "./SingleCandy";

function AppRouter() {
  return (
    <div>
      <Router>
        <div>
          <Link to="/">Home</Link>
          <div />
          <Link to="/candies">Candies</Link>
          <Route path="/candies" component={Candies} />
          <Route exact path="/" component={Root} />
          <Route path="candies/:id" component={SingleCandy} />
        </div>
      </Router>
    </div>
  );
}

export default AppRouter;
