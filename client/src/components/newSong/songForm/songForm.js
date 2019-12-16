import React from "react";
import TextInput from "../../common/textInput";
import { Link } from "react-router-dom";
import "./songForm.css";
import GenresContainer from "../genresContainer/genresContainer";

const SongForm = ({
  song,
  genres,
  onSave,
  onChange,
  onCheck,
  saving,
  errors
}) => {
  return (
    <form>
      <h1>New Song Page</h1>
      <div className="inputs">
        <TextInput
          name="name"
          label="Name*"
          value={song.title}
          onChange={onChange}
          error={errors.name}
        />
        <TextInput
          name="artist"
          label="Artist*"
          value={song.artist}
          onChange={onChange}
          error={errors.artist}
        />
        <TextInput
          name="duration"
          label="Duration*"
          value={song.duration}
          onChange={onChange}
          error={errors.duration}
        />
      </div>
      <br />
      <GenresContainer genres={genres} onChange={onCheck}></GenresContainer>
      <p className="alert-danger">{errors.genre}</p>

      <div className="botomButtons">
        <Link to={`/`}>
          <input type="button" value="Cancel" />
        </Link>
        <input type="button" onClick={onSave} value="Save" />
      </div>
    </form>
  );
};
export default SongForm;
