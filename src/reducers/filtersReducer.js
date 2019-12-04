import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const getSortedList = (songs, sortBy, sortDirection) => {
  // debugger;
  switch (sortBy) {
    case "artist":
      return songs.sort((a, b) =>
        a.artist > b.artist
          ? sortDirection === "asc"
            ? 1
            : -1
          : sortDirection === "desc"
          ? -1
          : 1
      );
    case "name":
      return songs.sort((a, b) =>
        a.name > b.name
          ? sortDirection === "asc"
            ? 1
            : -1
          : sortDirection === "desc"
          ? -1
          : 1
      );
    default:
      // debugger;
      return songs;
  }
};

const filtersReducer = (state = initialState.filters, action) => {
  switch (action.type) {
    case types.UPDATE_FILTERED_SONGS:
      const afterGenreSelection = getSortedList(
        action.songs,
        state.sortBy,
        state.sortDirection
      );
      // debugger;
      return Object.assign({}, state, { filteredSongs: afterGenreSelection });
    case types.TOGGLE_SORT_ORDER:
      // debugger;
      const newValue = state.sortDirection == "asc" ? "desc" : "asc";
      const afterSortOrder = getSortedList(
        state.filteredSongs,
        state.sortBy.slice(),
        state.sortDirection
      );
      return Object.assign({}, state, {
        sortDirection: newValue,
        filteredSongs: afterSortOrder
      });
    case types.CHANGE_SORT_BY:
      // debugger;
      const afterSortBy = getSortedList(
        state.filteredSongs,
        state.sortBy.slice(),
        state.sortDirection
      );
      return Object.assign({}, state, {
        sortBy: action.by,
        filteredSongs: afterSortBy
      });
    default:
      return state;
  }
};

export default filtersReducer;
