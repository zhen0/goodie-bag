import React from "react";
import { connect } from "react-redux";
import { getCandy } from "../reducers/candies";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Root from "./root";

class OldCandies extends React.Component {
  componentDidMount() {
    this.props.getCandy();
  }
  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
                <Route exact path="/" component={Root} />
              </li>
            </ul>
          </div>
        </Router>
        <div>
          <nav>Candies</nav>
          <main>
            <h1>Look At This Candy!</h1>
            <div>
              {this.props.candies.map(candy => (
                <div>
                  <h2 key={candy.id}>{candy.name}</h2>
                  <p key={candy.id}>{candy.description}</p>
                  <img key={candy.id} src={candy.imageURL} />
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  candies: state.candyReducer.candies
});

const mapDispatch = dispatch => ({
  getCandy: () => dispatch(getCandy())
});

const Candies = connect(
  mapState,
  mapDispatch
)(OldCandies);

export default Candies;
