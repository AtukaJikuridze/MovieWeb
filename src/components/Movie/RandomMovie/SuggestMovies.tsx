import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SuggestMovies.css";
interface SuggestMovies {
  allMovies: Array<any>;
  currentMovie: number;
  navigate: any;
}

export default function SuggestMovies(props: SuggestMovies) {
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
      console.log(true);
    } else {
      console.log(false);

      i--;
    }
  }

  return (
    <div className="suggest-movies">
      {randomMovie.map((e) => (
        <div className="suggest-movie">
          <div className="suggest-img">
            <img
              src={`https://image.tmdb.org/t/p/w1280${props.allMovies[e].backdrop_path}`}
              alt=""
            />
            <button
              onClick={() => props.navigate(`movies/${props.allMovies[e].id}`)}
            >
              Watch Now !
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
