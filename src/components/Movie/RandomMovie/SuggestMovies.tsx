import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SuggestMovies.css";
interface SuggestMovies {
  allMovies: Array<any>;
  currentMovie: number;
  navigate: any;
  setWatchHistory: any;
  watchHistory: Array<number>;
}

export default function SuggestMovies(props: SuggestMovies) {
  const watchSuggestMovie = (e: number) => {
    props.navigate(`movies/${props.allMovies[e].id}`);
    props.setWatchHistory([...props.watchHistory, props.allMovies[e].id]);
  };
  const navigate = useNavigate();
  const randomMovie: Array<number> = [];
  for (let i = 0; i <= 3; i++) {
    let randomNumber = Math.floor(Math.random() * 20);
    console.log(randomMovie);
    if (
      !randomMovie.includes(randomNumber) &&
      props.allMovies[randomNumber].id !== props.currentMovie
    ) {
      randomMovie.push(randomNumber);
    } else {
      i--;
    }
  }

  return (
    <div className="suggest-movies">
      {randomMovie.map((e, i) => (
        <div className="suggest-movie" key={i}>
          <div className="suggest-img">
            <img
              src={`https://image.tmdb.org/t/p/w1280${props.allMovies[e].backdrop_path}`}
              alt=""
            />
            <button onClick={() => watchSuggestMovie(e)}>Watch Now !</button>
          </div>
        </div>
      ))}
    </div>
  );
}
