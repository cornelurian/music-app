import React from "react";

export default function SortButton(props) {
  return (
    <input
      type="button"
      name="sort"
      style={{
        width: "20px",
        height: "20px",
        backgroundImage: `${props.image}`,
        backgroundSize: "cover"
      }}
      onClick={props.onClick}
    />
  );
}
