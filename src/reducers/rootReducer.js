import { combineReducers } from 'redux';

import ajaxCallsInProgress from './ajaxStatusReducer';
import songs from './landingPageReducer';
import selectedGenre from './selectedGenreReducer';
import filters from './filtersReducer';

const rootReducer = combineReducers({
  ajaxCallsInProgress,
  songs,
  selectedGenre,
  filters
});

export default rootReducer;
