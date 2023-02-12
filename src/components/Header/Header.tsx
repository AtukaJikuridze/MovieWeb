import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
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
    </header>
  );
}
