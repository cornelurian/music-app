import React from "react";
export default function Grid(props) {
  return props.songs.map((song, index) => (
    <>
      <span>{song.name}</span>
      <span>{song.artist}</span>
      <span>{song.duration} sec</span>
    </>
  ));
}
