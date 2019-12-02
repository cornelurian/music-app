import React, { Component } from "react";
import { connect } from "react-redux";

import musicGenres from "../../../constants/genres";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.cards = this.getUniqueCategories(props.songs);
  }

  getUniqueCategories = songs => {
    const allGenresListFromSongs = [].concat(...songs.map(song => song.genre)); //concatenate all genres from all songs

    const uniqueGenres = [
      ...new Set(allGenresListFromSongs.map(genre => genre.toLowerCase()))
    ]; //new set containing unique genres from songs

    return uniqueGenres.map(name => ({
      genre: name,
      noOfSongs: allGenresListFromSongs.filter(item => item === name).length,
      image: musicGenres.find(genre => genre.name === name)
    }));
  };

  render() {
    return (
      <div className="homepage" style={{ border: "1px solid red" }}>
        Test App home Page
        <p>---------------</p>
        {this.cards.map(card => (
          <p>{card.genre}</p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    songs: state.songs
  };
};

const mapDispatchToProps = dispatch => ({
  //simpleAction: () => dispatch(simpleAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
