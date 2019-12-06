import * as types from '../actions/actionTypes'
import initialState from './initialState';

const landingPageReducer = (state = initialState.songs, action) => {
  switch (action.type) {
    case types.LOAD_SONGS_SUCCESS:
      return action.songs;
    default:
      return state;
  }
};

export default landingPageReducer;