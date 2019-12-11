import * as types from "./actionTypes";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusActions";
import { genres } from "../constants/genres";
import songsApi from "../api/songsApi";

export const loadSongsSuccess = songs => {
  return { type: types.LOAD_SONGS_SUCCESS, songs };
};

export const selectGenre = genre => {
  return { type: types.SELECT_GENRE, payload: genre };
};

export const updateFilteredSongs = songs => {
  return { type: types.UPDATE_FILTERED_SONGS, songs };
};

export const updateCards = cards => {
  return { type: types.UPDATE_CARDS, cards };
};

export const loadSongs = () => dispatch => {
  dispatch(beginAjaxCall());
  return songsApi
    .getAllSongs()
    .then((songs = []) => {
      //store the songs
      dispatch(loadSongsSuccess(songs));

      //store the cards based on the song list
      const cards = getUniqueCategories(songs);
      return dispatch(updateCards(cards));
    })
    .catch(error => {
      throw error;
    });
};

const getBackgroundImage = selected => {
  const info = genres.find(genre => genre.name.toLowerCase() === selected);
  return info && info.backgroundImage;
};

const getUniqueCategories = songs => {
  const allGenresListFromSongs = [].concat(...songs.map(song => song.genre)); //concatenate all genres from all songs

  const uniqueGenres = [
    ...new Set(allGenresListFromSongs.map(genre => genre.toLowerCase()))
  ]; //new set containing unique genres from songs

  return uniqueGenres.map(name => {
    return {
      genre: name,
      count: allGenresListFromSongs.filter(item => item === name).length,
      image: getBackgroundImage(name)
    };
  });
};
