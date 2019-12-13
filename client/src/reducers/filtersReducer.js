import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const getSortedList = (songs, sortBy, sortDirection) => {
  switch (sortBy) {
    case "artist":
      return sortDirection === "asc"
        ? songs.sort((a, b) => (a.artist > b.artist ? 1 : -1))
        : songs.sort((a, b) => (a.artist > b.artist ? -1 : 1));
    case "name":
      return sortDirection === "asc"
        ? songs.sort((a, b) => (a.name > b.name ? 1 : -1))
        : songs.sort((a, b) => (a.name > b.name ? -1 : 1));
    default:
      return songs;
  }
};

export const filtersReducer = (state = initialState.filters, action) => {
  switch (action.type) {
    case types.UPDATE_FILTERED_SONGS:
      return Object.assign({}, state, {
        filteredSongs: getSortedList(
          [...action.songs],
          state.sortBy,
          state.sortDirection
        )
      });
    case types.TOGGLE_SORT_ORDER:
      const newValue = state.sortDirection === "asc" ? "desc" : "asc";
      return Object.assign({}, state, {
        sortDirection: newValue,
        filteredSongs: getSortedList(
          [...state.filteredSongs],
          state.sortBy,
          newValue
        )
      });
    case types.CHANGE_SORT_BY:
      return Object.assign({}, state, {
        sortBy: action.by,
        filteredSongs: getSortedList(
          [...state.filteredSongs],
          action.by,
          state.sortDirection
        )
      });
    default:
      return state;
  }
};

export default filtersReducer;
