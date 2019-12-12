import React, { Component } from "react";
import { connect } from "react-redux";

import Card from "../card/card";
import { loadSongs } from "../../../actions/songsListActions";
import "./genreList.css";
import { loadCardsFromSongs } from "../../../actions/landingPageActions";

class GenreList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this.props.loadSongs();
    debugger
    this.props.loadCards(this.props.songs);
  }

  render() {
    return (
      <div className="homepage" style={{ border: "1px solid gray" }}>
        Genres based on {this.props.songs.length} songs
        <div className="cards">
          {this.props.cards.map(item => (
            <Card key={item.name} card={item}></Card>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    songs: state.songs,
    cards: state.cards
  };
};

const mapDispatchToProps = dispatch => ({
  loadSongs: () => dispatch(loadSongs()),
  loadCards: songs => dispatch(loadCardsFromSongs(songs))
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
