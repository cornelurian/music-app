import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import SongForm from "../songForm/songForm";
import { saveSong } from "../../../actions/songsListActions";

class ManageSong extends React.Component {
  constructor(props) {
    super(props);

    const newSong = {
      id: 0,
      name: "",
      artist: "",
      duration: 0,
      genre: []
    };

    this.state = {
      song: Object.assign({}, newSong),
      selectedGenres: new Map(),
      errors: {},
      saving: false
    };

    this.updateSongState = this.updateSongState.bind(this);
    this.updateGenreSelection = this.updateGenreSelection.bind(this);
    this.saveSong = this.saveSong.bind(this);
  }

  isFormValid() {
    let formIsValid = true;
    let errors = {};
    if (this.state.song.name === "") {
      errors.name = "Title is required";
      formIsValid = false;
    }
    if (this.state.song.artist === "") {
      errors.artist = "Artist is required";
      formIsValid = false;
    }
    if (this.state.song.duration === 0) {
      errors.duration = "Duration is required";
      formIsValid = false;
    }
    if (this.state.song.genre === []) {
      errors.genre = "At least one genre is required";
      formIsValid = false;
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  saveSong(event) {
    event.preventDefault();

    if (!this.isFormValid()) {
      return;
    }

    //set song's genre property with the list of selected checkboxes (from map)
    this.props.submit(
      Object.assign({}, this.state.song, {
        genre: [...this.state.selectedGenres.keys()]
      })
    );
  }

  updateSongState(event) {
    const field = event.target.name;
    let song = this.state.song;

    //update song property [property]
    song[field] = event.target.value;
    return this.setState({ song: song });
  }

  updateGenreSelection(event) {
    const item = event.target.name;
    const isChecked = event.target.checked;

    //update the check property of the coresponding checkbox item from list
    this.setState(prevState => ({
      selectedGenres: prevState.selectedGenres.set(item, isChecked)
    }));
  }

  render() {
    return (
      <SongForm
        song={this.state.song}
        genres={this.state.selectedGenres}
        onChange={this.updateSongState}
        onCheck={this.updateGenreSelection}
        onSave={this.saveSong}
        errors={this.state.errors}
        saving={this.state.saving}
      ></SongForm>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.songs.length
  };
};
const mapDispatchToProps = dispatch => {
  return {
    submit: song => dispatch(saveSong(song), push("/"))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSong);
