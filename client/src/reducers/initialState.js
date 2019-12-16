export default {
  ajaxCallsInProgress: false, //ajaxStatusReducer
  selectedGenre: "",          //selectedGenreReducer
  songs: [],                  //songsReducer
  cards: [],                  //cardsReducer
  filters: {                  //filtersReducer
    filteredSongs: [],
    filteredBy: "",
    sortBy: "artist",
    sortDirection: "asc"
  }
};
