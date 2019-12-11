import { combineReducers } from 'redux';

import ajaxCallsInProgress from './ajaxStatusReducer';
import selectedGenre from './selectedGenreReducer';
import songs from './songsReducer';
import cards from './cardsReducer';
import filters from './filtersReducer';

const rootReducer = combineReducers({
  ajaxCallsInProgress,
  songs,
  cards,
  selectedGenre,
  filters
});

export default rootReducer;
