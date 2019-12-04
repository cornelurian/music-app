import * as types from '../actions/actionTypes'
import initialState from './initialState';

const landingPageReducer = (state = initialState.songs, action) => {
  switch (action.type) {
    case types.LOAD_SONGS_SUCCESS:
      return action.songs;
    case types.SELECT_GENRE:
      return state;
    default:
      return state;
  }
};

export default landingPageReducer;