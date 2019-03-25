import axios from "axios";

// action types

const ADD_CANDY = "ADD_CANDY";

//action creators

export const gotCandy = data => ({
  type: ADD_CANDY,
  data
});

export const getCandy = () => {
  return async dispatch => {
    try {
      let { data } = await axios.get("./api/candy");
      console.log("data: ", data);
      dispatch(gotCandy(data));
    } catch (err) {
      console.log("problem with candy thunk", err);
    }
  };
};

//state

const initialState = { candies: [] };

const candyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CANDY:
      return { ...state, candies: action.data };
    default:
      return state;
  }
};

export default candyReducer;
