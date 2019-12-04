import React, { Component } from "react";
import { connect } from "react-redux";

class InputSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterBy: this.props.filterBy || ""
    };
  }

  componentDidMount() {
    this.setState({
      filterBy: this.props.filterBy
    });
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
      <div>
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
  console.log("map state");
  return {
    songs: state.filters.filteredSongs,
    filterBy: state.filters.filterBy
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(InputSearch);
