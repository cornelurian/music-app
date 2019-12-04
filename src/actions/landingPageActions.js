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
        artist: "A1",
        name: "Song 1",
        genre: ["rock", "pop"], 
        duration: 423
      },
      {
        artist: "A2",
        name: "Song 2",
        genre: ["rock"], 
        duration: 142
      },
      {
        artist: "A3",
        name: "Song 3",
        genre: ["classic"], 
        duration: 235
      },
      {
        artist: "A3",
        name: "Song 4",
        genre: ["ragae"], 
        duration: 140
      },
      {
        artist: "A5",
        name: "Song 5",
        genre: ["jazz"], 
        duration: 124
      },
      {
        artist: "A3",
        name: "Song 6",
        genre: ["blues","rock"], 
        duration: 150
      }
    ])
  );
};
