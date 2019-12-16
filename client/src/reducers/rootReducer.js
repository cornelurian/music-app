import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';

import ajaxCallsInProgress from "./ajaxStatusReducer";
import selectedGenre from "./selectedGenreReducer";
import songs from "./songsReducer";
import cards from "./cardsReducer";
import filters from "./filtersReducer";

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    ajaxCallsInProgress,
    songs,
    cards,
    selectedGenre,
    filters
  });

export default rootReducer;
