import React from "react";
import { connect } from "react-redux";
import { getCandy, getSingleCandy } from "../reducers/candies";
import SingleCandy from "./SingleCandy";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Root from "./Root";

class OldCandies extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.getCandy();
  }

  handleClick(id) {
    this.props.getSingleCandy(id);
  }
  render() {
    if (!this.props.candies.length) {
      return <h1>Loading</h1>;
    }
    return (
      <div>
        <nav>Candies</nav>
        <main>
          <h1>Look At This Candy!</h1>
          <div>
            {this.props.candies.map(
              candy => (
                <div>
                  <Link
                    to={`/candies/${candy.id}`}
                    key={candy.id}
                    onClick={() => this.handleClick(candy.id)}
                  >
                    {candy.name}
                  </Link>
                  <Route
                    path={`/candies/${candy.id}`}
                    component={SingleCandy}
                  />
                </div>
              )
              // <div key={candy.id}>
              //   <h2>{candy.name}</h2>
              //   <p>{candy.description}</p>
              //   <img src={candy.imageUrl} />
              // </div>
            )}
          </div>
        </main>
      </div>
    );
  }
}

const mapState = state => ({
  candies: state.candyReducer.candies,
  loading: state.candyReducer.loading
});

const mapDispatch = dispatch => ({
  getCandy: () => dispatch(getCandy()),
  getSingleCandy: id => dispatch(getSingleCandy(id))
});

const Candies = connect(
  mapState,
  mapDispatch
)(OldCandies);

export default Candies;
