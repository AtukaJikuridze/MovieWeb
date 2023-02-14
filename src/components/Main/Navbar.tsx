import React, { useState } from "react";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [bars, setBars] = useState<boolean>(false);

  const changeBar = () => {
    setBars((current) => !current);
    document
      .querySelector(".leftsidenav-main")
      ?.classList.toggle("leftside-navafter");

    document
      .querySelector(".RightSideNav")
      ?.classList.remove("afterRightside-nav");
  };
  return (
    <nav>
      <ul>
        <li>
          {!bars ? (
            <AiOutlineBars onClick={changeBar} />
          ) : (
            <AiOutlineClose onClick={changeBar} />
          )}
        </li>
        <li>
          <Link to={"/"}>Movies</Link>
        </li>
        <li className="navdisabledlink">
          <Link to={"/"}>Sports</Link>
        </li>
        <li className="navdisabledlink">
          <Link to={"/"}>TV Series</Link>
        </li>
        <li className="navdisabledlink">
          <Link to={"/"}>Kids</Link>
        </li>
        <li>
          <Link to={"/"}>More</Link>
        </li>
      </ul>
      <button
        onClick={() => {
          document
            .querySelector(".RightSideNav")
            ?.classList.toggle("afterRightside-nav");

          document
            .querySelector(".leftsidenav-main")
            ?.classList.remove("leftside-navafter");
        }}
      >
        My Information
      </button>
    </nav>
  );
}
