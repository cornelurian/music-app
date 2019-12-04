import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectGenre,
  updateFilteredSongs
} from "../../../actions/landingPageActions";
import { IMAGES_PATH } from "../../../constants/relativePaths";

export default function SummaryItem(props) {
  const { genre, count, image = "noImage.PNG" } = props.card;
  const filePath = `url(${IMAGES_PATH}${image})`;

  const allSongs = useSelector(state => state.songs);
  const selectedGenre = useSelector(state => state.selectedGenre);
  const dispatch = useDispatch();

  const getSongsByGenre = genre => {
    if (allSongs && genre) {
      return allSongs.filter(song => song.genre.includes(genre));
    }
    return [];
  };

  const handleGenreSelection = genre => {
      dispatch(selectGenre(genre));
      dispatch(updateFilteredSongs(getSongsByGenre(genre)));
  };

  return (
    <div
      style={{
        float: "left",
        width: "130px",
        height: "130px",
        margin: "4px",
        backgroundImage: filePath
      }}
      onClick={() => {
        return handleGenreSelection(genre);
      }}
    >
      <h3
        style={{
          margin: "0"
        }}
      >
        {genre}
      </h3>
      <p
        style={{
          margin: "0",
          padding: "0"
        }}
      >
        {count}
      </p>
    </div>
  );
}
