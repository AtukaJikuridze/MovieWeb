import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Main from "./components/Main/Main";
import LeftsideNav from "./components/LeftsideNav/LeftsideNav";
import RightsideNav from "./components/RightsideNav/RightsideNav";
import Movie from "./components/Movie/Movie";
import { allMovieAPI } from "./AllMovie";
function App() {
  const navigate = useNavigate();
  const [allMovie, setAllMovie] = useState([]);
  const [continueWatching, setContinueWatchList] = useState([]);
  const [watchList, setWatchList] = useState([]);
  useEffect(() => {
    setAllMovie(allMovieAPI.results);
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
        <Route
          path="movies/:id"
          element={<Movie navigate={navigate} allMovies={allMovie} />}
        />
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
