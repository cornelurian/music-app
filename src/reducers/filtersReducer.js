import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const filtersReducer = (state = initialState.filters, action) => {
  switch (action.type) {
    case types.UPDATE_FILTERED_SONGS:
      return Object.assign({}, state, { filteredSongs: action.songs });
    default:
      return state;
  }
};

export default filtersReducer;
