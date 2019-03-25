import React from "react";
import { connect } from "react-redux";
import { getCandy, increaseCandy } from "../reducers/candies";

class SingleCandy extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  //   componentDidMount() {
  //     this.props.getCandy();

  handleClick(id) {
    this.props.increaseCandy(id);
  }
  render() {
    if (!this.props.candy.name) {
      return <h1>You need to click on a link to get your candy info!</h1>;
    }
    return (
      <div>
        <h2>{this.props.candy.name}</h2>
        <p>{this.props.candy.description}</p>
        <p>
          We have {this.props.candy.quantity} {this.props.candy.name}
        </p>
        <button onClick={() => this.handleClick(this.props.candy.id)}>
          Increase the Candy!!
        </button>
        <img src={this.props.candy.imageUrl} />
      </div>
    );
  }
}

const mapState = state => {
  return {
    candy: state.candyReducer.lookCandy
    // candies: state.candyReducer.candies
  };
};

const mapDispatch = dispatch => {
  return {
    increaseCandy: id => dispatch(increaseCandy(id))
    // getCandy: () => dispatch(getCandy())
  };
};

export default connect(
  mapState,
  mapDispatch
)(SingleCandy);
