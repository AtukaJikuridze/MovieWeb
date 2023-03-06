import React, { useState } from "react";
import LeftNavLink from "./LeftNavLink";
import { useNavigate, useParams } from "react-router-dom";
import { allMovieAPI } from "../../AllMovie";
import {
  BsSearch,
  BsClipboard,
  BsCalendarCheck,
  BsStar,
  BsNut,
} from "react-icons/bs";
import "./LeftsideNav.css";

export default function LeftsideNav() {
  const navigate = useNavigate();
  const params = useParams();
  const search = (e: any) => {
    navigate("/MovieWeb");
    window.scrollTo(0, 570);
  };
  const logoToHomepage = () => {
    navigate("/MovieWeb");

    document
      .querySelector(".leftsidenav-main")
      ?.classList.remove("leftside-navafter");
  };
  return (
    <div className="leftsidenav-main">
      <div className="leftside-nav-fixed">
        <div className="leftside-logo">
          <img
            style={{ cursor: "pointer" }}
            onClick={logoToHomepage}
            src={require("../../assets/images/Logo.png")}
            alt=""
          />
        </div>

        <p className="leftside-category-name">MENU</p>
        <LeftNavLink
          onClick={(e: any) => search(e)}
          icon={BsSearch}
          title="Search"
        />

        <LeftNavLink
          onClick={() => navigate("MovieWeb/watchlist")}
          icon={BsClipboard}
          title="Watchlist"
        />
        <LeftNavLink icon={BsCalendarCheck} title="Coming soon" />
        <p className="leftside-category-name">SOCIAL</p>
        {/* <LeftNavLink icon={BsPeople} title="Friends" /> */}
        <LeftNavLink icon={BsStar} title="Most Rating" />
        <LeftNavLink icon={BsNut} title="Newest Movies" />
      </div>
    </div>
  );
}
