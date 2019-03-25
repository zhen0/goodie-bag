import axios from "axios";

// action types

const ADD_CANDY = "ADD_CANDY";
const ADD_SINGLE_CANDY = "ADD_SINGLE_CANDY";
const INCREASED_CANDY = "INCREASED_CANDY";
const GETTING = "GETTING";

//action creators

export const getting = () => ({
  type: GETTING
});

export const gotCandy = data => ({
  type: ADD_CANDY,
  data
});

const gotSingleCandy = data => ({
  type: ADD_SINGLE_CANDY,
  data
});

const increasedCandy = data => ({
  type: INCREASED_CANDY,
  data
});
export const getCandy = () => {
  return async dispatch => {
    dispatch(getting());
    try {
      let { data } = await axios.get("/api/candy");

      dispatch(gotCandy(data));
    } catch (err) {
      console.log("problem with candy thunk", err);
    }
  };
};

export const getSingleCandy = id => {
  return async dispatch => {
    try {
      let { data } = await axios.get(`/api/candy/${id}`);
      dispatch(gotSingleCandy(data));
    } catch (err) {
      console.log("Problem with SingleCandy thunk", err);
    }
  };
};

export const increaseCandy = id => {
  return async dispatch => {
    try {
      let { data } = await axios.put(`/api/candy/${id}`);
      dispatch(increasedCandy(data));
    } catch (err) {
      console.log("problem increasing candy", err);
    }
  };
};
//state

const initialState = { candies: [], lookCandy: {}, loading: false };

const candyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING:
      return { ...state, loading: true };
    case ADD_CANDY:
      return { ...state, loading: false, candies: action.data };
    case ADD_SINGLE_CANDY:
      return { ...state, lookCandy: action.data };
    case INCREASED_CANDY:
      return { ...state, lookCandy: action.data };
    default:
      return state;
  }
};

export default candyReducer;
