import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from 'history';
import { routerMiddleware } from "connected-react-router";
import rootReducer from "../reducers/rootReducer";

export const history = createBrowserHistory();

export default function configureStore(initialState) {
  return createStore(
    rootReducer(history),
    initialState,
    applyMiddleware(routerMiddleware(history), thunk)
  );
}
