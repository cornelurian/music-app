import React, { Component } from "react";
import { connect } from "react-redux";
import {
  toggleSortList,
  changeSortBy
} from "../../../actions/songsListActions";
import Grid from "../grid/grid";
import "./songsList.css";

import {
  IMAGES_PATH,
  ICON_SORT_NAME,
  ICON_ADD_NAME
} from "../../../constants/relativePaths";

class SongsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterBy: this.props.filterBy || ""
    };

    this.sortIconPath = `url(${IMAGES_PATH}${ICON_SORT_NAME})`;
    this.sortAddPath = `url(${IMAGES_PATH}${ICON_ADD_NAME})`;
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

  highlightSelectedHeader(currentBy) {
    return this.props.filters.sortBy === currentBy ? 'selected' : '';
  }

  render() {
    const list = this.props.songs.filter(
      song =>
        this.state.filterBy === "" ||
        song.artist.toLowerCase().includes(this.state.filterBy.toLowerCase()) ||
        song.name.toLowerCase().includes(this.state.filterBy.toLowerCase())
    );

    return (
      <div style={{ border: "1px solid gray", width: "600px" }}>
        {this.props.selectedGenre} songs:
        <br />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            width: "270px"
          }}
        >
          <input
            value={this.input}
            type="text"
            placeholder="search by Artist or Song"
            onChange={this.onChangeHandler.bind(this)}
          />

          <input
            type="button"
            name="sort"
            style={{
              backgroundImage: `${this.sortIconPath}`,
              backgroundSize: "cover"
            }}
            onClick={this.props.toggleSortList}
          />
          <input
            type="button"
            name="add"
            style={{
              backgroundImage: `${this.sortAddPath}`,
              backgroundSize: "cover"
            }}
          />
        </div>
        <br />
        <div className="grid">
          <span
          className={`header ${this.highlightSelectedHeader("name")}`}
            onClick={event => {
              this.props.changeSortBy("name");
            }}
          >
            Name
          </span>
          <span
            className={`header  ${this.highlightSelectedHeader("artist")}`}
            onClick={event => {
              this.props.changeSortBy("artist");
            }}
          >
            Artist
          </span>
          <span className="header">Duration</span>
          <Grid songs={list}></Grid>
        </div>
        <br />
        {/* <p>Filters: {JSON.stringify(this.props.filters, null, 2)}</p> */}
        <p>SortBy: {this.props.filters.sortBy}</p>
        <p>SortDirection: {this.props.filters.sortDirection}</p>
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

const mapDispatchToProps = dispatch => {
  return {
    toggleSortList: () => dispatch(toggleSortList()),
    changeSortBy: value => dispatch(changeSortBy(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongsList);
