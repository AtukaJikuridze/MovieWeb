import React from "react";
import { useParams } from "react-router-dom";
import "./Movie.css";
import { MovieID } from "../MovieID";

interface MovieInterface {
  allMovies: Array<any>;
}

export default function Movie(props: MovieInterface) {
  const params = useParams();
  const correctMovie = MovieID.find((e) => e.id === Number(params.id));
  console.log(correctMovie);
  return (
    <div className="movie-main">
      <video src={correctMovie?.url} controls />
    </div>
  );
}
