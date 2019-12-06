import * as types from "./actionTypes";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusActions";

export const loadSongsSuccess = songs => {
  return { type: types.LOAD_SONGS_SUCCESS, songs };
};

export const selectGenre = genre => {
  return { type: types.SELECT_GENRE, payload: genre };
};

export const updateFilteredSongs = songs => {
  return { type: types.UPDATE_FILTERED_SONGS, songs };
};

export const loadSongs = () => dispatch => {
  dispatch(beginAjaxCall());
  // return songsApi.getAllSongs().then(songs => {
  //   dispatch(loadSongsSuccess(songs));
  // }).catch(error => {
  //   throw(error);
  // });

  dispatch(
    loadSongsSuccess([
      {
        artist: "A2",
        name: "Song 6",
        genre: ["rock", "pop"], 
        duration: 423
      },
      {
        artist: "D2",
        name: "Song 4",
        genre: ["rock"], 
        duration: 142
      },
      {
        artist: "F3",
        name: "Song 3",
        genre: ["classic"], 
        duration: 235
      },
      {
        artist: "B3",
        name: "Song 7",
        genre: ["ragae"], 
        duration: 140
      },
      {
        artist: "A5",
        name: "Song 3",
        genre: ["jazz", "blues"], 
        duration: 124
      },
      {
        artist: "B3",
        name: "Song 1",
        genre: ["blues","rock"], 
        duration: 150
      }
    ])
  );
};
