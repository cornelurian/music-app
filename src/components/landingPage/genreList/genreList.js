import React, { Component } from "react";
import { connect } from "react-redux";

import Card from "../card/card";
import { genres } from "../../../constants/genres";
import "./genreList.css";

class GenreList extends Component {
  constructor(props) {
    super(props);
    this.cards = this.getUniqueCategories(props.songs);
  }

  getBackgroundImage = selected => {
    const info = genres.find(genre => genre.name.toLowerCase() === selected);
    return info && info.backgroundImage;
  };

  getUniqueCategories = songs => {
    const allGenresListFromSongs = [].concat(...songs.map(song => song.genre)); //concatenate all genres from all songs

    const uniqueGenres = [
      ...new Set(allGenresListFromSongs.map(genre => genre.toLowerCase()))
    ]; //new set containing unique genres from songs

    return uniqueGenres.map(name => {
      return {
        genre: name,
        count: allGenresListFromSongs.filter(item => item === name).length,
        image: this.getBackgroundImage(name)
      };
    });
  };

  render() {
    return (
      <div className="homepage" style={{ border: "1px solid gray" }}>
        Genres
        <div className="cards">
          {this.cards.map(item => (
              <Card key={item.name} card={item}></Card>
          ))}
        </div>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
