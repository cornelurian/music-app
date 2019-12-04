import React from "react";
export default function Grid(props) {
  return (
    <>
      {props.songs.map((song, index) => (
        <tr>
          <td class="tg-0lax">{song.name}</td>
          <td class="tg-0lax">{song.artist}</td>
          <td class="tg-0lax">{song.duration} sec</td>
        </tr>
      ))}
    </>
  );
}
