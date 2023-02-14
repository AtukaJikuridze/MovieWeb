import React, { useState } from "react";
import LeftNavLink from "./LeftNavLink";
import { useNavigate } from "react-router-dom";
import { allMovieAPI } from "../../AllMovie";
import {
  BsSearch,
  BsClipboard,
  BsCalendarCheck,
  BsStar,
  BsNut,
} from "react-icons/bs";
import "./LeftsideNav.css";
interface LeftsideNavInterface {}
export default function LeftsideNav(props: LeftsideNavInterface) {
  const navigate = useNavigate();
  const search = (e: any) => {
    window.scrollTo(0, 500);
  };

  return (
    <div className="leftsidenav-main">
      <div className="leftside-nav-fixed">
        <div className="leftside-logo">
          <img
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/");
            }}
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
          onClick={() => navigate("/watchlist")}
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
