import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
interface HeaderInterface {
  allMovie: Array<any>;
  watchList: Array<number>;
  setWatchList: any;
}
export default function Header(props: HeaderInterface) {
  function AddWatchList(e: number) {
    console.log(props.watchList);
    if (!props.watchList.includes(e)) {
      props.setWatchList([...props.watchList, e]);
    } else {
      props.setWatchList(props.watchList.filter((y) => y !== e));
    }
  }
  return (
    <main>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Movies</Link>
            </li>
            <li>
              <Link to={"/"}>Sports</Link>
            </li>
            <li>
              <Link to={"/"}>TV Series</Link>
            </li>
            <li>
              <Link to={"/"}>Kids</Link>
            </li>
            <li>
              <Link to={"/"}>More</Link>
            </li>
          </ul>
        </nav>
        <div className="header-background">
          <img
            className="blur"
            src={require("../../assets/images/Blur.png")}
            alt=""
          />{" "}
        </div>
        <div className="header-text">
          <h1>Black Adam in the Multiverse of Madness</h1>
          <div className="flex">
            <p>Action</p>
            <p>Adventure</p>
            <p>Fantasy</p>
          </div>
          <button>Watch</button>
        </div>
      </header>
      <h1 style={{ margin: "100px 30px" }}>Movies :</h1>
      <div className="allMovie">
        {props.allMovie.map((e) => (
          <div className="movie">
            <img
              src={`https://image.tmdb.org/t/p/w1280${e.backdrop_path}`}
              alt=""
            />
            <div className="movie-info">
              <div className="movie-text">
                <h2>{e.title}</h2>
                <button onClick={() => {}}>Watch Now</button>
                <button onClick={() => AddWatchList(e.id)}>
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
      </div>
    </main>
  );
}
