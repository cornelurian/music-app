import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const cardsGenreReducer = (state = initialState.cards, action) => {
  switch (action.type) {
    case types.UPDATE_CARDS:
      return action.cards;
    default:
      return state;
  }
};

export default cardsGenreReducer;
