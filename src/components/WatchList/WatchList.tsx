import React from "react";
import "./WatchList.css";
import "../Main/Main.css";
import { Link } from "react-router-dom";
import Navbar from "../Main/Navbar";
interface WatchListInterface {
  watchList: Array<number>;
  allMovie: Array<any>;
  setWatchHistory: any;
  watchHistory: Array<number>;
  setWatchList: any;
  navigate: any;
}
export default function WatchList(props: WatchListInterface) {
  const watchListMap = () => {
    let mv_list: Array<any> = [];
    for (let i = 0; i < props.watchList.length; i++) {
      let new_movie = props.allMovie.find((x) => x.id === props.watchList[i]);
      mv_list.unshift(new_movie);
    }
    return (
      <>
        {mv_list.map((e, i) => (
          <div className="movie" key={i}>
            <img
              src={`https://image.tmdb.org/t/p/w1280${e.backdrop_path}`}
              alt=""
            />
            <div className="movie-info">
              <div className="movie-text">
                <h2>{e.title}</h2>
                <button
                  onClick={() => {
                    props.navigate(`movies/${e.id}`);
                    props.setWatchHistory([...props.watchHistory, e.id]);
                    console.log(true);
                  }}
                >
                  Watch Now
                </button>
                <button
                  onClick={() =>
                    props.setWatchList(
                      props.watchList.filter((f) => f !== e.id)
                    )
                  }
                >
                  {props.watchList.includes(e.id) ? (
                    <p>Remove From Watchlist</p>
                  ) : (
                    <p>Add To Watchlist</p>
                  )}
                </button>
                <h2>Rating : {e.vote_average}</h2>
                <h2>Release date : {e.release_date}</h2>
                <p>Description {e.overview}</p>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };
  return (
    <>
      <div className="watchlist-main">
        <Navbar />
        {props.watchList.length === 0 ? (
          <div className="empty-watchlist">
            <h1 className="nowatchlist">Watch list is empty</h1>
            <Link to={"/"}>Back To Home Page..</Link>
          </div>
        ) : (
          <>
            <div className="watchlist-text">
              <h1>WatchList: </h1>
            </div>
            <div className="allMovie">{watchListMap()}</div>
          </>
        )}
      </div>
    </>
  );
}
