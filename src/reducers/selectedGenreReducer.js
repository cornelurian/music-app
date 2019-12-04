import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const selectedGenreReducer = (state = initialState.selectedGenre, action) => {
  switch (action.type) {
    case types.SELECT_GENRE:
      return action.payload;
    default:
      return state;
  }
};

export default selectedGenreReducer;
