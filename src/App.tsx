import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Main from "./components/Main/Main";
import LeftsideNav from "./components/LeftsideNav/LeftsideNav";
import RightsideNav from "./components/RightsideNav/RightsideNav";
import Movie from "./components/Movie/Movie";
function App() {
  const [allMovie, setAllMovie] = useState([]);
  const [continueWatching, setContinueWatchList] = useState([]);
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    const MoviePage1 = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1&fbclid=IwAR1zilEssAROuHxlSvRY-N6pt936Y8dP3lKlVsKdCjrxRlmRxqGqAszh0zA"
      );
      setAllMovie(response.data.results);
    };

    MoviePage1();
  }, []);

  return (
    <div className="App">
      <LeftsideNav />

      <Routes>
        <Route
          path="/"
          element={
            <Main
              allMovie={allMovie}
              setWatchList={setWatchList}
              watchList={watchList}
            />
          }
        />
        <Route path="movies/:id" element={<Movie allMovies={allMovie} />} />
      </Routes>

      <RightsideNav
        allMovie={allMovie}
        watchList={watchList}
        continueWatching={continueWatching}
      />
    </div>
  );
}

export default App;
