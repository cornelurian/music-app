import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const songsPageReducer = (state = initialState.songs, action) => {
  switch (action.type) {
    case types.LOAD_SONGS_SUCCESS:
      return action.songs;
    case types.ADD_NEW_SONG:
      return [...state, action.newSong];
    default:
      return state;
  }
};

export default songsPageReducer;
