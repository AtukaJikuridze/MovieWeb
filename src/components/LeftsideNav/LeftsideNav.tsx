import React from "react";
import LeftNavLink from "./LeftNavLink";
import {
  BsSearch,
  BsClipboard,
  BsCalendarCheck,
  BsStar,
  BsNut,
} from "react-icons/bs";
import "./LeftsideNav.css";
export default function LeftsideNav() {
  return (
    <div className="leftsidenav-main">
      <div className="leftside-logo">
        <img src={require("../../assets/images/Logo.png")} alt="" />
      </div>
      <p className="leftside-category-name">MENU</p>
      <LeftNavLink icon={BsSearch} title="Search" />
      <LeftNavLink icon={BsClipboard} title="Watchlist" />
      <LeftNavLink icon={BsCalendarCheck} title="Coming soon" />
      <p className="leftside-category-name">SOCIAL</p>
      {/* <LeftNavLink icon={BsPeople} title="Friends" /> */}
      <LeftNavLink icon={BsStar} title="Most Rating" />
      <LeftNavLink icon={BsNut} title="Newest Movies" />
    </div>
  );
}
