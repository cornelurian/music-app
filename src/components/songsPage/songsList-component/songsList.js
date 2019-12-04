import React, { Component } from "react";
import { connect } from "react-redux";
import { updateFilteredSongs } from "../../../actions/songsListActions";

class SongsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterBy: this.props.filterBy || ""
    };
  }

  onChangeHandler(e) {
    this.setState(
      {
        filterBy: e.target.value
      },
      () => {
        console.log("input: " + this.state.filterBy);
      }
    );
  }

  render() {
    const list = this.props.songs
      .filter(
        song =>
          this.state.filterBy === "" ||
          song.artist.toLowerCase().includes(this.state.filterBy) ||
          song.name.toLowerCase().includes(this.state.filterBy)
      )
      .map((song, index) => (
        <li key={index}>
          {song.artist}-{song.name}
        </li>
      ));

    return (
      <div style={{ border: "1px solid yellow", width: "600px" }}>
        {this.props.selectedGenre} songs:
        <input
          value={this.input}
          type="text"
          onChange={this.onChangeHandler.bind(this)}
        />
        {/* {JSON.stringify(this.props.songs, null, 2)} */}
        <ul>{list}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    selectedGenre: state.selectedGenre,
    songs: state.filters.filteredSongs,
    filterBy: state.filters.filterBy,
    filters: state.filters
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SongsList);
