import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Movie.css";
import { MovieID } from "../MovieID";
import SuggestMovies from "./RandomMovie/SuggestMovies";

interface MovieInterface {
  allMovies: Array<any>;
  navigate: any;
}

export default function Movie(props: MovieInterface) {
  const params = useParams();
  const correctMovie = MovieID.find((e) => e.id === Number(params.id));
  const movieInfo = props.allMovies.filter((e) => e.id === Number(params.id));
  const info = movieInfo[0];
  return (
    <div className="movie-main">
      <div className="video-main">
        <video src={correctMovie?.url} controls />
      </div>
      <div className="movie-info">
        <div className="movie-img">
          <img
            src={`https://image.tmdb.org/t/p/w1280${info.backdrop_path}`}
            alt=""
          />
        </div>
        <div>
          <h2>{info.title}</h2>
          <p>{info.overview}</p>
          <h4>IMDB: {info.vote_average}</h4>
          <h4>Original Language : {info.original_language}</h4>
          <p>ReleaseDate: {info.release_date}</p>
        </div>
      </div>
      <h1>Here is some suggest movies..</h1>

      <SuggestMovies
        navigate={props.navigate}
        currentMovie={info.id}
        allMovies={props.allMovies}
      />
    </div>
  );
}
