import { useState } from "react";
import "./Main.css";
import "./MainQuery/mainquery.css";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader/MainHeader";
interface HeaderInterface {
  allMovie: Array<any>;
  watchList: Array<number>;
  setWatchList: any;
  watchHistory: Array<number>;
  setWatchHistory: any;
}
export default function Header(props: HeaderInterface) {
  const [inputValue, setInputValue] = useState<string>("");
  function AddWatchList(e: number) {
    console.log(props.watchList);
    if (!props.watchList.includes(e)) {
      props.setWatchList([...props.watchList, e]);
    } else {
      props.setWatchList(props.watchList.filter((y) => y !== e));
    }
  }
  const allMovieMap = props.allMovie
    .filter((f) => f.title.toLowerCase().includes(inputValue.toLowerCase()))
    .map((e, i) => (
      <div className="movie" key={i}>
        <img
          src={`https://image.tmdb.org/t/p/w1280${e.backdrop_path}`}
          alt=""
        />

        <div className="movie-info">
          <div className="movie-text">
            <h2>{e.title}</h2>
            <div className="movie-buttons">
              <Link to={`/MovieWeb/movies/${e.id}`}>
                <button
                  onClick={() => {
                    props.setWatchHistory([...props.watchHistory, e.id]);
                    window.scrollTo(0, 0);
                  }}
                >
                  Watch Now
                </button>
              </Link>

              <button onClick={() => AddWatchList(e.id)}>
                {props.watchList.includes(e.id) ? (
                  <p>Remove From Watchlist</p>
                ) : (
                  <p>Add To Watchlist</p>
                )}
              </button>
            </div>
            <h2>Rating : {e.vote_average}</h2>
            <h2>Release date : {e.release_date}</h2>
            <p>Description {e.overview}</p>
          </div>
        </div>
      </div>
    ));

  return (
    <main>
      <MainHeader
        watchHistory={props.watchHistory}
        setWatchHistory={props.setWatchHistory}
      />
      <h1 style={{ margin: "100px 30px" }}>Search Movies :</h1>
      <input
        type="text"
        placeholder="Search a movie"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="allMovie">
        {allMovieMap.length > 0 ? (
          allMovieMap
        ) : (
          <h1 style={{ margin: "40px auto" }}>Sorry , Movie did not found</h1>
        )}
      </div>
    </main>
  );
}
