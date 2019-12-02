import * as types from "./actionTypes";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusActions";

export const loadSongsSuccess = songs => {
  return { type: types.LOAD_SONGS_SUCCESS, songs };
};

export const loadSongs = () => dispatch => {
  dispatch(beginAjaxCall());
 

  dispatch(
    loadSongsSuccess([
      {
        artist: "A1",
        name: "Song 1",
        genre: ["rock", "pop"]
      },
      {
        artist: "A2",
        name: "Song 2",
        genre: ["rock"]
      }
    ])
  );
};
