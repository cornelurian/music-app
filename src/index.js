import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider, ReactReduxContext } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./store/store";
import { loadSongs } from "./actions/songsListActions";

const store = configureStore();
store.dispatch(loadSongs());

ReactDOM.render(
  <Provider store={store} context={ReactReduxContext}>
    <ConnectedRouter history={history} context={ReactReduxContext}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
