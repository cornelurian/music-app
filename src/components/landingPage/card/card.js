import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CARDS_IMAGES_PATH } from "../../../constants/relativePaths";

export default function Card(props) {
  const { genre, count, image = "noImage.PNG" } = props.card;
  const filePath = `url(${CARDS_IMAGES_PATH}${image})`;

  return (
    <Link to={`/${genre}`}>
      <div className="summaryItem">
        <div
          className="photo"
          style={{ backgroundImage: filePath, backgroundSize: "cover" }}
        ></div>
        <div className="details">
          {genre} ({count})
        </div>
      </div>
    </Link>
  );
}
