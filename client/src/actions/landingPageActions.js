import * as types from "./actionTypes";
import { genres } from "../constants/genres";

export const selectGenre = genre => {
  return { type: types.SELECT_GENRE, payload: genre };
};

export const updateFilteredSongs = songs => {
  return { type: types.UPDATE_FILTERED_SONGS, songs };
};

export const loadCardsFromSongs = songs => {
  //store the cards based on the song list
  const cards = getUniqueCategories(songs);
  return updateCards(cards);
};

export const updateCards = cards => {
  return { type: types.UPDATE_CARDS, cards };
};

const getBackgroundImage = selected => {
  const info = genres.find(genre => genre.name.toLowerCase() === selected);
  return info && info.backgroundImage;
};

const getUniqueCategories = songs => {
  const allGenresListFromSongs = []
    .concat(...songs.map(song => song.genre))
    .map(name => name.toLowerCase()); //concatenate all genres from all songs

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
