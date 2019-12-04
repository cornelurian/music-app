import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";

import HomePage from "./components/landingPage/homePage-component/homePage";
import SongsList from "./components/songsPage/songsList-component/songsList";

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HomePage></HomePage>
          {this.props.isGenreSelected && <SongsList />}
        </header>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0,
    isGenreSelected: state.selectedGenre != ""
  };
}

export default connect(mapStateToProps)(App);
