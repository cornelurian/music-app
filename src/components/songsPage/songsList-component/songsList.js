import React, { Component } from "react";
import { connect } from "react-redux";
import { updateFilteredSongs } from "../../../actions/songsListActions";
import Grid from "../grid/grid";

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
        song.artist.toLowerCase().includes(this.state.filterBy) ||
        song.name.toLowerCase().includes(this.state.filterBy)
    );
    //   .map((song, index) => (
    //     <li key={index}>
    //       {song.artist}-{song.name}
    //     </li>
    //   ));

    debugger;
    return (
      <div style={{ border: "1px solid yellow", width: "600px" }}>
        {this.props.selectedGenre} songs:
        <br></br>
        <input
          value={this.input}
          type="text"
          placeholder="search by Artist or Song"
          onChange={this.onChangeHandler.bind(this)}
        />
        {/* {JSON.stringify(this.props.songs, null, 2)} */}
        <table class="tg" style={{width: "100%"}}>
          <tr>
            <th class="tg-0pky">Name</th>
            <th class="tg-0lax">Artist</th>
            <th class="tg-0lax">Duration</th>
          </tr>
          <Grid songs={list}></Grid>
        </table>
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
