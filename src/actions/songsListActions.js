import * as types from "./actionTypes";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusActions";
import { loadCardsFromSongs } from "./landingPageActions";
import songsApi from "../api/songsApi";
import { push } from 'connected-react-router'

export const toggleSortList = () => {
  return { type: types.TOGGLE_SORT_ORDER };
};

export const changeSortBy = value => {
  return { type: types.CHANGE_SORT_BY, by: value };
};

export const saveSongSuccess = song => {
  return { type: types.ADD_NEW_SONG_SUCCESS, newSong: song };
};

export const loadSongsSuccess = songs => {
  return { type: types.LOAD_SONGS_SUCCESS, songs };
};

export const loadSongs = () => dispatch => {
  dispatch(beginAjaxCall());
  return songsApi
    .getAllSongs()
    .then((songs = []) => {
      //store the songs
      dispatch(loadSongsSuccess(songs));
      return dispatch(loadCardsFromSongs(songs));
    })
    .catch(error => {
      dispatch(ajaxCallError(error));
      throw error;
    });
};

export const saveSong = song => {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    dispatch(push('/'));
    return dispatch(saveSongSuccess(song));
    // return songsApi.saveSong(song).then(song => {
    //     dispatch(saveSongSuccess(song));
    // }).catch(error => {
    //   dispatch(ajaxCallError(error));
    //   throw(error);
    // });
  };
};
