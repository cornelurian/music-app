import React, { Component } from "react";
import { Link } from "react-router-dom";
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
import {
  selectGenre,
  updateFilteredSongs
} from "../../../actions/landingPageActions";
import SortButton from "../sortButton/sortButton";

class SongsList extends Component {
  constructor(props) {
    super(props);
    const {
      match: { params }
    } = this.props;

    this.genreUrlParam = params.genre;
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
    return this.props.filters.sortBy === currentBy ? "selected" : "";
  }

  getSongsByGenre(genre) {
    if (this.props.allSongs && genre) {
      return this.props.allSongs.filter(song =>
        song.genre.map(name => name.toLowerCase()).includes(genre.toLowerCase())
      );
    }
    return [];
  }

  componentDidMount() {
    const filteredSongs = this.getSongsByGenre(this.genreUrlParam);
    this.props.selectGenre(this.genreUrlParam, filteredSongs);
  }

  render() {
    const list = this.props.songs.filter(
      song =>
        this.state.filterBy === "" ||
        song.artist.toLowerCase().includes(this.state.filterBy.toLowerCase()) ||
        song.name.toLowerCase().includes(this.state.filterBy.toLowerCase())
    );

    return (
      <div className="content">
        <h2>{this.props.selectedGenre} songs</h2>
        <br />
        <div id="listHeader">
          <Link className="backButton" to={`/`}>
            {`<Back`}
          </Link>

          <div className="searchAndButtons">
            <input
              value={this.input}
              type="text"
              placeholder="search by Artist or Song"
              onChange={this.onChangeHandler.bind(this)}
            />
            <Link to={`/new`}>
              <input
                type="button"
                name="add"
                style={{
                  height: "17px",
                  marginLeft: "20px",
                  backgroundImage: `${this.sortAddPath}`,
                  backgroundSize: "cover"
                }}
              />
            </Link>
          </div>
        </div>
        <br />
        <div className="grid">
          <div
            className={`header ${this.highlightSelectedHeader("name")}`}
            onClick={event => {
              this.props.changeSortBy("name");
            }}
          >
            <p>Name</p>
            {this.props.filters.sortBy === "name" && (
              <SortButton
                image={this.sortIconPath}
                onClick={this.props.toggleSortList}
              ></SortButton>
            )}
          </div>
          <div
            className={`header  ${this.highlightSelectedHeader("artist")}`}
            onClick={event => {
              this.props.changeSortBy("artist");
            }}
          >
            <p>Artist</p>
            {this.props.filters.sortBy === "artist" && (
              <SortButton
                image={this.sortIconPath}
                onClick={this.props.toggleSortList}
              ></SortButton>
            )}
          </div>
          <div className="header">
            <p>Duration</p>
          </div>
          <Grid songs={list}></Grid>
        </div>
        <br />
        <div className="footer">
          <p>SortBy: {this.props.filters.sortBy}</p>
          <p>SortDirection: {this.props.filters.sortDirection}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    allSongs: state.songs,
    selectedGenre: state.selectedGenre,
    songs: state.filters.filteredSongs,
    filterBy: state.filters.filterBy,
    filters: state.filters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleSortList: () => dispatch(toggleSortList()),
    changeSortBy: value => dispatch(changeSortBy(value)),
    selectGenre: (genre, list) => {
      return dispatch(selectGenre(genre)), dispatch(updateFilteredSongs(list));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongsList);
