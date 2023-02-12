import React from "react";
import "./RightsideNav.css";
interface WatchHistoryCardInterface {
  movieImg: string;
  title: string;
  genre: string;
}
export default function RightsideCard(props: WatchHistoryCardInterface) {
  return (
    <div className="RightsideCard">
      <div className="movie-image">
        <img src={props.movieImg} alt="" />
      </div>
      <div className="movige-description">
        <h2>{props.title}</h2>
        <p>{props.genre}</p>
      </div>
    </div>
  );
}
