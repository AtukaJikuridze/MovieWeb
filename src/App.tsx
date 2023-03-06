import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";
import LeftsideNav from "./components/LeftsideNav/LeftsideNav";
import RightsideNav from "./components/RightsideNav/RightsideNav";
import Movie from "./components/Movie/Movie";
import { allMovieAPI } from "./AllMovie";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import WatchList from "./components/WatchList/WatchList";
function App() {
  const navigate = useNavigate();
  const [allMovie, setAllMovie] = useState([]);
  const [watchHistory, setWatchHistory] = useState([]);
  const [watchList, setWatchList] = useState([]);
  useEffect(() => {
    setAllMovie(allMovieAPI.results);
  }, []);

  return (
    <div className="App">
      <LeftsideNav />

      <Routes>
        <Route path="/MovieWeb">
          <Route
            index
            element={
              <Main
                watchHistory={watchHistory}
                setWatchHistory={setWatchHistory}
                allMovie={allMovie}
                setWatchList={setWatchList}
                watchList={watchList}
              />
            }
          />
          <Route
            path="movies/:id"
            element={
              <Movie
                setWatchHistory={setWatchHistory}
                watchHistory={watchHistory}
                allMovies={allMovie}
              />
            }
          />
          <Route
            path="/MovieWeb/watchlist"
            element={
              <WatchList
                navigate={navigate}
                setWatchList={setWatchList}
                setWatchHistory={setWatchHistory}
                watchHistory={watchHistory}
                allMovie={allMovie}
                watchList={watchList}
              />
            }
          />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <RightsideNav
        allMovie={allMovie}
        watchList={watchList}
        watchHistory={watchHistory}
      />
    </div>
  );
}

export default App;
