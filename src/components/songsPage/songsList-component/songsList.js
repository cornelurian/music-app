import React, { Component } from "react";
import { connect } from "react-redux";
import { updateFilteredSongs } from "../../../actions/songsListActions";
import Grid from "../grid/grid";
import "./songsList.css";

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
    const list = this.props.songs.filter(
      song =>
        this.state.filterBy === "" ||
        song.artist.toLowerCase().includes(this.state.filterBy.toLowerCase()) ||
        song.name.toLowerCase().includes(this.state.filterBy.toLowerCase())
    );
    //   .map((song, index) => (
    //     <li key={index}>
    //       {song.artist}-{song.name}
    //     </li>
    //   ));

    debugger;
    return (
      <div style={{ border: "1px solid gray", width: "600px" }}>
        {this.props.selectedGenre} songs:
        <br />
        <input
          value={this.input}
          type="text"
          placeholder="search by Artist or Song"
          onChange={this.onChangeHandler.bind(this)}
        />
        <br />
        {/* {JSON.stringify(this.props.songs, null, 2)} */}
        <div class="grid">
          <span className="header">Name</span>
          <span className="header">Artist</span>
          <span className="header">Duration</span>
          <Grid songs={list}></Grid>
        </div>
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
