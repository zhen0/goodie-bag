import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Candies from "./candies";

const Root = () => {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link to="/candies">Candies</Link>
            <Route exact path="/candies" component={Candies} />
          </li>
        </ul>
      </Router>
      <div>
        <nav>Goodie Bag</nav>
        <main>
          <h1>Welcome to the Goodie Bag!</h1>
          <p>What a nice home page for your goodies!</p>
        </main>
      </div>
    </div>
  );
};

export default Root;
