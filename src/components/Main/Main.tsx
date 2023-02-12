import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
export default function Header() {
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
      <h1>asd</h1>
    </main>
  );
}
