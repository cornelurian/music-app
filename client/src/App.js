import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { Route, Switch } from 'react-router' // react-router v4/v5

import GenreList from "./components/landingPage/genreList/genreList";
import SongsList from "./components/songsPage/songsList/songsList";
import ManageSong from "./components/newSong/manageSong/manageSong";

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Header loading={this.props.loading}/> */}
        <header className="App-header">
            <div>
              <Route exact path="/" component={GenreList} />
              <Route path="/songs/:genre" component={SongsList} />
              <Route exact path="/new" component={ManageSong} />
            </div>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
