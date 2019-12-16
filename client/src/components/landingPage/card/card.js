import React from "react";
import { Link } from "react-router-dom";
import './card.css';
import { CARDS_IMAGES_PATH } from "../../../constants/relativePaths";

export default function Card(props) {
  const { genre, count, image = "noImage.PNG" } = props.card;
  const filePath = `url(${CARDS_IMAGES_PATH}${image})`;

  return (
    <Link to={`/songs/${genre}`}>
      <div className="summaryItem">
        <div
          className="photo"
          style={{ backgroundImage: filePath, backgroundSize: "cover" }}
        />
        <p className="text">{genre} ({count})</p>
      </div>
    </Link>
  );
}
