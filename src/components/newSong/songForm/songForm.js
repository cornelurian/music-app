import React, { Component } from "react";
import { connect } from "react-redux";
import TextInput from "../../common/textInput";
import { Link } from "react-router-dom";
import GenresContainer from "../genresContainer/genresContainer";

const SongForm = ({song, genres, onSave, onChange, onCheck, saving, errors}) => {
  return (
    <form>
      <h1>New Song Page</h1>
      <TextInput
        name="name"
        label="name"
        value={song.title}
        onChange={onChange}
        error={errors.title}
      />
      <TextInput
        name="artist"
        label="Artist"
        value={song.artist}
        onChange={onChange}
        error={errors.artist}
      />
      <TextInput
        name="duration"
        label="Duration"
        value={song.duration}
        onChange={onChange}
        error={errors.duration}
      />
      <br />
      <GenresContainer genres={genres} onChange={onCheck}></GenresContainer>

      <Link to={`/`}><input type="button" value="Cancel" /></Link>
      <input type="button" onClick={onSave} value="Save" />
    </form>
  );
};
export default SongForm;
