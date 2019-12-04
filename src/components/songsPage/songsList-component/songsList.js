import React, { Component } from "react";
import { connect } from "react-redux";
import { updateFilteredSongs } from "../../../actions/songsListActions";
import InputSearch from "./../inputSearch-component/inputSearch";

class SongsList extends Component {
  render() {
    return (
      <div style={{ border: "1px solid yellow", width: "600px" }}>
        {this.props.selectedGenre} songs:
        <br></br>
        {/* {JSON.stringify(this.props.songs, null, 2)} */}
        <InputSearch></InputSearch>
        <ul>
          {this.props.songs.map(song => (
            <li key={song.name}>
              {song.artist} - {song.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    selectedGenre: state.selectedGenre,
    songs: state.filters.filteredSongs,
    filters: state.filters
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SongsList);
