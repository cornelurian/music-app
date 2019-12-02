import React, { Component } from "react";
import { IMAGES_PATH } from "../../../constants/relativePaths";

export default function SummaryItem(props) {
  const { genre, count, image = "noImage.PNG" } = props.card;
  const filePath = `url(${IMAGES_PATH}${image})`;

  return (
    <div
      style={{
        float: "left",
        width: "130px",
        height: "130px",
        margin: "4px",
        backgroundImage: filePath
      }}
    >
      <h3
        style={{
          margin: "0",
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
