import React from "react";
import "./RightsideNav.css";
import { FaSearch, FaBell } from "react-icons/fa";
import RightsideCard from "./RightsideCard";
interface RightSideNavInterface {
  continueWatching: Array<any>;
  watchList: Array<any>;
}
export default function RightsideNav(props: RightSideNavInterface) {
  return (
    <div className="RightSideNav">
      <div className="rightnav-header">
        <FaSearch />
        <FaBell />
        <div className="user">
          <img src={require("../../assets/images/Userimage.png")} alt="" />
          <h2>John Voyager</h2>
        </div>
      </div>
      <div className="continue-watching">
        {props.continueWatching.length === 0 ? (
          <>
            <h2>Watch History..</h2>
            <p>
              You did not have any Watch History, here is some popular movies
            </p>

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
        ) : null}
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
        ) : null}
      </div>
    </div>
  );
}
