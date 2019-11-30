import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState'
import rootReducer from '../reducers/rootReducer';

export default function configureStore(initialState) {
 return createStore(
  rootReducer,
  applyMiddleware(thunk)
 );
}