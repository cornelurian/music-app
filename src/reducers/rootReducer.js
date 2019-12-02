import { combineReducers } from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import songs from './landingPageReducer';

const rootReducer = combineReducers({
  ajaxCallsInProgress,
  songs
});

export default rootReducer;
