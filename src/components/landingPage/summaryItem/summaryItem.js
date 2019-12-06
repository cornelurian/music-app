import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectGenre,
  updateFilteredSongs
} from "../../../actions/landingPageActions";
import { CARDS_IMAGES_PATH } from "../../../constants/relativePaths";

export default function SummaryItem(props) {
  const { genre, count, image = "noImage.PNG" } = props.card;
  const filePath = `url(${CARDS_IMAGES_PATH}${image})`;

  const allSongs = useSelector(state => state.songs);
  const selectedGenre = useSelector(state => state.selectedGenre);
  const dispatch = useDispatch();

  const getSongsByGenre = genre => {
    if (allSongs && genre) {
      return allSongs.filter(song => song.genre.includes(genre));
    }
    return [];
  };

  const HandleGenreSelection = genre => {
    dispatch(selectGenre(genre));
    dispatch(updateFilteredSongs(getSongsByGenre(genre)));
  };

  return (
    <div
      className="summaryItem"
      onClick={() => {
        return HandleGenreSelection(genre);
      }}
    >
      <div
        className="photo"
        style={{ backgroundImage: filePath, backgroundSize: "cover" }}
      ></div>
      <div className="details">
        <Link to={`/${genre}`}>
          {genre} ({count})
        </Link>
      </div>
    </div>
  );
}
