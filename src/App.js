import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";


import GenreList from "./components/landingPage/genreList/genreList";
import SongsList from "./components/songsPage/songsList/songsList";


export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <div>
              <Route exact path="/" component={GenreList} />
              <Route path="/:genre" component={SongsList} />
            </div>
          </Router>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0,
    isGenreSelected: state.selectedGenre !== ""
  };
}

export default connect(mapStateToProps)(App);
