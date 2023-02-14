import React, { useState } from "react";
import "./RightsideNav.css";
import { FaSearch, FaBell } from "react-icons/fa";
import RightsideCard from "./RightsideCard";
interface RightSideNavInterface {
  watchHistory: Array<any>;
  watchList: Array<any>;
  allMovie: Array<any>;
}
export default function RightsideNav(props: RightSideNavInterface) {
  const watchHistoryClear = (
    <>
      <p>You did not have any Watch History, here is some popular movies</p>

      <RightsideCard
        movieImg={require("../../assets/images/MovieSonic.png")}
        title="Sonic the hodgehog 2 (2021)"
        genre="Adventure, Comedy"
      />

      <RightsideCard
        movieImg={require("../../assets/images/MovieOrphan.png")}
        title="Orphan : First Kill (2022)"
        genre="Horror, Thriller"
      />

      <RightsideCard
        movieImg={require("../../assets/images/MovieDragon.png")}
        title="House of The Dragon (2022)"
        genre="Horror, Thriller"
      />
    </>
  );
  const watchListFilter = () => {
    let mv_list: Array<any> = [];
    for (let i = 0; i < props.watchList.length; i++) {
      let new_movie = props.allMovie.find((x) => x.id === props.watchList[i]);
      mv_list.unshift(new_movie);
    }
    return mv_list.map((e, i) => (
      <>
        <RightsideCard
          key={i}
          movieImg={` https://image.tmdb.org/t/p/w1280${e.backdrop_path}`}
          title={e.title}
          genre={e.release_date}
        />
      </>
    ));
  };

  const watchHistoryFilter = () => {
    let mv_list: Array<any> = [];
    for (let i = 0; i < props.watchHistory.length; i++) {
      let new_movie = props.allMovie.find(
        (x) => x.id === props.watchHistory[i]
      );
      if (!mv_list.includes(new_movie)) {
        mv_list.unshift(new_movie);
      } else {
        let filtered = mv_list.filter((e) => e !== new_movie);
        mv_list = filtered;
        mv_list.unshift(new_movie);
      }
    }
    return mv_list.map((e, i) => (
      <>
        <RightsideCard
          key={i}
          movieImg={` https://image.tmdb.org/t/p/w1280${e.backdrop_path}`}
          title={e.title}
          genre={e.release_date}
        />
      </>
    ));
  };
  return (
    <div className="RightSideNav">
      <div className="nav-overflow">
        <div className="rightnav-header">
          <FaSearch />
          <FaBell />
          <div className="user">
            <img src={require("../../assets/images/Userimage.png")} alt="" />
            <h2>John Voyager</h2>
          </div>
        </div>

        <div className="continue-watching">
          <h2>Watch History..</h2>

          {props.watchHistory.length === 0
            ? watchHistoryClear
            : watchHistoryFilter()}
        </div>

        <div className="watch-list">
          {props.watchList.length === 0 ? (
            <>
              <h2>WatchList...</h2>
              <p>You did not have any Watchlist, here is some popular movies</p>

              <RightsideCard
                movieImg={require("../../assets/images/Dota.png")}
                title="Dota: Dragon's Blood (2021)"
                genre="Adventure"
              />

              <RightsideCard
                movieImg={require("../../assets/images/Venom.png")}
                title="Venom: Let There Be Carnage"
                genre="Fantasy, Action"
              />
            </>
          ) : (
            <>
              <h2>WatchList...</h2>
              {watchListFilter()}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
