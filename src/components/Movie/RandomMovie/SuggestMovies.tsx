import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./SuggestMovies.css";
interface SuggestMovies {
  allMovies: Array<any>;
  currentMovie: number;
  setWatchHistory: any;
  watchHistory: Array<number>;
}

export default function SuggestMovies(props: SuggestMovies) {
  const [loaded, setLoaded] = useState<boolean>(false);
  useEffect(() => {
    if (props?.allMovies !== null) {
      setLoaded(true);
    }
  }, []);
  const watchSuggestMovie = (e: number) => {
    window.scrollTo(0, 0);
    props.setWatchHistory([...props.watchHistory, props.allMovies[e].id]);
  };

  const randomMovie: Array<number> = [];
  for (let i = 0; i <= 3; i++) {
    let randomNumber = Math.floor(Math.random() * 20);
    if (loaded) {
      if (
        !randomMovie.includes(randomNumber) &&
        props.allMovies[randomNumber].id !== props.currentMovie
      ) {
        randomMovie.push(randomNumber);
      } else {
        i--;
      }
    }
  }

  return (
    <div className="suggest-movies">
      {randomMovie.map((e, i) => (
        <div className="suggest-movie" key={i}>
          <div className="suggest-img">
            <img
              src={`https://image.tmdb.org/t/p/w1280${props.allMovies[e]?.backdrop_path}`}
              alt=""
            />
            <Link to={"/MovieWeb/movies/" + props.allMovies[e].id}>
              <button onClick={() => watchSuggestMovie(e)}>Watch Now !</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
